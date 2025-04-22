import { decodeHTML } from "entities";
import normalizePath from "../../utils/normalizePath";
class PageModel {
    constructor({ path, title, content, lastUpdate, }) {
        this._path = normalizePath(path);
        this._title = decodeHTML(title);
        this._content = content;
        this._lastUpdate = lastUpdate;
    }
    get path() {
        return this._path;
    }
    get title() {
        return this._title;
    }
    get content() {
        return this._content;
    }
    get lastUpdate() {
        return this._lastUpdate;
    }
    isEqual(other) {
        return (this.path === other.path &&
            this.content === other.content &&
            this.lastUpdate.equals(other.lastUpdate));
    }
}
export default PageModel;
