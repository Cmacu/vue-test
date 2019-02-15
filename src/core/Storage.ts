
class Storage {
	private storage = localStorage;

	public getItem(name: string) {
		return this.storage.getItem(name);
	}

	public setItem(name: string, value: string) {
		return this.storage.setItem(name, value);
	}

	public removeItem(name: string) {
		return this.storage.removeItem(name);
	}
}

export default new Storage();
