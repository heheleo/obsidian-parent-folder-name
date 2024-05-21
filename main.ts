import { Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {
	async onload() {
		const statusBarItem = this.addStatusBarItem();
		
		const filePath = this.app.vault.adapter.getResourcePath(this.app.workspace.getActiveFile()?.path || "");
		if(filePath) {
			let cleaned = filePath;
			cleaned = cleaned.split("?")[0];
			cleaned = cleaned.split("/").at(-2) || "";
			statusBarItem.setText(cleaned);
		} else {
			statusBarItem.setText("Could not fetch workspace path");
		}
	}

	onunload() {}
}
