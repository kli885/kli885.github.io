/**
 * @name Mine
 * @version 0.0.1
 * @description Change CSS
 * @author PlutoMonkey
 *  
 */

module.exports = class mineCSS {
    load() {
        if (!window.BDFDB_Global || !Array.isArray(window.BDFDB_Global.pluginQueue)) window.BDFDB_Global = Object.assign({}, window.BDFDB_Global, { pluginQueue: [] });
        if (!window.BDFDB_Global.downloadModal) {
            window.BDFDB_Global.downloadModal = true;
            BdApi.showConfirmationModal("Library Missing", `The Library Plugin needed for ${config.info.name} is missing. Please click "Download Now" to install it.`, {
                confirmText: "Download Now",
                cancelText: "Cancel",
                onCancel: _ => { delete window.BDFDB_Global.downloadModal; },
                onConfirm: _ => {
                    delete window.BDFDB_Global.downloadModal;
                    this.downloadLibrary();
                }
            });
        }
        if (!window.BDFDB_Global.pluginQueue.includes(config.info.name)) window.BDFDB_Global.pluginQueue.push(config.info.name);
    };
    start() {
        var hasMember = document.getElementsByClassName('membersWrap-3NUR2t');
        if (hasMember.length > 0) {
            console.log("EXISTS")
        }
    };
    stop() { }
}