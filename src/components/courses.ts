import { Q2Form, apiRequest, Q2DataList, Q2App } from "q2-web"

async function fetchContent(path: string) {
    try {
        const data = await apiRequest(`${path}/content.json`);
        return data
    }
    catch {
        return []
    }
}

export async function getContent(path: string, title_path: string) {
    const content: any = await fetchContent(path);
    if (Object.keys(content).length === 0) {
        Q2App.instance?.showMsg("Ist leer")
        return null;
    }
    else {
        // console.log(Object.keys(content[0]))
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

            const contentForm = new Q2Form("", "", "", { class: " form-selector " });
            contentForm.frameless = true;
            contentForm.moveable = false;
            contentForm.resizeable = false;
            contentForm.add_control("/v")
            contentForm.add_control("/h", "", { alignment: 5, class: "title-panel" })
            contentForm.add_control("label", title_path, { control: "label", class: "selector-title", })
            contentForm.add_control("/")
            contentForm.add_control("/v")
            contentForm.add_control("sc", "", { control: "list", data: contentList })

            return contentForm;
        }
    }
}