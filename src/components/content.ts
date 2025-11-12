import { Q2Form, apiRequest, Q2DataList, Q2App } from "q2-web"
import { OneWordTrainer } from "./one-word-trainer/one-word-trainer"
import { SlotsTextTrainer } from "./slots-text-trainer/slots-text-trainer"

async function fetchContent(path: string) {
    try {
        const data = await apiRequest(`${path}/content.json`);
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

function getTrainerForm(widget: any, content: any): Q2Form {
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

export async function getContent(path: string, title_path: string) {
    const content: any = await fetchContent(path);
    if (Object.keys(content).length === 0) {
        Q2App.instance?.showMsg("Ist leer")
        return null;
    }
    else {
        // folder content
        if (["folder", "title", "description"].every(k => k in content[0])) {
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
                const { title, folder } = datagrid.state.data[datagrid.state.selectedRow];
                console.log(datagrid.state.data[datagrid.state.selectedRow], `${path}/${folder}`)
                getContent(`${path}/${folder}`, `${title_path}<font color=red>/</font>${title}`).then((f) => { f?.showDialog() });
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
        // one-word-trainer
        else if (['key', 'sentence', 'words'].every(k => k in content[0])) {
            return getTrainerForm(OneWordTrainer, content)
        }
        // slot text
        else if (['slot_text'].every(k => k in content[0])) {
            return getTrainerForm(SlotsTextTrainer, content[0])
        }
        else {
            console.log("Unknown format", Object.keys(content[0]))
        }
    }
}