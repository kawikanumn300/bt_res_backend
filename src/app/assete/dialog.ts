import { custom } from 'devextreme/ui/dialog';

export class Dialogue {
    public static Confirm(title: string, message: string): Promise<boolean> {
        return new Promise(r => {
            custom({
                showTitle: true,
                title: title,
                messageHtml: `<div class="center"></div><br>${message}`,
                buttons: [
                    {
                        icon: "check", text: "ใช่", type: "success", focusStateEnabled: false,
                        onClick: () => r(true)
                    },
                    {
                        icon: "close", text: "ไม่", type: "danger",
                        onClick: () => r(false)
                    }
                ]
            }).show();
        });
    }
}
