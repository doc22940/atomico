import { diff } from "./diff";
import { toVnode, createElement } from "../vnode";
import { NODE_HOST } from "../constants";

export function render(vnode, node, id = "vnode") {
    if (
        vnode != null &&
        typeof vnode == "object" &&
        vnode.nodeType != NODE_HOST
    ) {
        vnode = createElement(NODE_HOST, { children: vnode });
    }
    vnode = toVnode(vnode);
    diff(id, node, vnode);
    return node;
}
