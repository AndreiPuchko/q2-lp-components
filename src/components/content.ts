import { Q2Form, apiRequest, Q2DataList, Q2App } from "q2-web"
import { OneWordTrainer } from "./one-word-trainer/one-word-trainer"
import { SlotsTextTrainer } from "./slots-text-trainer/slots-text-trainer"
import { LinkSlotsTrainer } from "./link-slots-trainer/link-slots-trainer"

async function fetchContent(path: string) {
    try {
        const data = await apiRequest(`${import.meta.env.BASE_URL}/${path}`);
        return data
    }
    catch {
        return []
    }
}

function getNewForm(): Q2Form {
    const newForm = new Q2Form();
    newForm.frameless = true;
    newForm.moveable = false;
    newForm.resizeable = false;
    return newForm
}

function getFileForm(widget: any, content: any): Q2Form {
    const trainerForm = getNewForm();
    trainerForm.add_control("/h");
    trainerForm.add_control("label", "", {
        control: "widget",
        data: {
            widget: widget,
            props: { data: content }
        }
    })
    return trainerForm;
}

async function getFileContent(path: string) {
    const file_content: any = await fetchContent(path);
    // one-word-trainer
    if (['key', 'sentence', 'words'].every(k => k in file_content[0])) {
        return getFileForm(OneWordTrainer, file_content)
    }
    // slot text
    else if (['slot_text'].every(k => k in file_content[0])) {
        return getFileForm(SlotsTextTrainer, file_content[0])
    }
    // slot text
    else if (['slots_1', 'slots_2', 'answers'].every(k => k in file_content[0])) {
        return getFileForm(LinkSlotsTrainer, file_content[0])
    }
    else {
        console.log("Unknown format", Object.keys(file_content[0]))
    }
}

export async function getFolderContent(path: string, title_path: string) {
    const folder_content: any = await fetchContent(`${path}/folder_content.json`);
    const content: Array<object> = [];
    if (folder_content.folders) {
        folder_content.folders.forEach((el:any) => { content.push({ folder: el, title: `🗀 ${el}`, type: "folder" }) })
    }
    if (folder_content.files) {
        folder_content.files.forEach((el:any) => { content.push({ folder: el, title: el.replace(".json", ""), type: "file" }) })
    }
    if (Object.keys(folder_content).length === 0) {
        Q2App.instance?.showMsg("Ist leer")
        return null;
    }
    else {
        const contentList = new Q2Form("", "", "", {
            class: "content-selector",
            dataGridParams: {
                showCurrentRow: false,
                showHeaders: true,
                loader: () => content
            }
        });
        contentList.add_control("title");

        contentList.hookDataGridRowClicked = (datagrid: Q2DataList) => {
            const { title, folder, type } = datagrid.state.data[datagrid.state.selectedRow];
            const next_path = `${path}/${folder}`
            // console.log(datagrid.state.data[datagrid.state.selectedRow], next_path)
            if (type === "folder") {
                getFolderContent(next_path, `${title_path}<font color=red>/</font>${title}`).then((f) => { f?.showDialog() })
            }
            else {
                getFileContent(next_path).then((f) => { f?.showDialog() })
            }
        }

        const contentForm = getNewForm();
        contentForm.class = " form-selector ";
        contentForm.add_control("/v")
        contentForm.add_control("/h", "", { alignment: 5, class: "title-panel" })
        contentForm.add_control("label", title_path, { control: "label", class: "selector-title", })
        contentForm.add_control("/")
        contentForm.add_control("/v")
        contentForm.add_control("sc", "", { control: "list", data: contentList })
        return contentForm;
    }
}