import { find as _find } from "lodash";

export const getItemById = (items, id) => _find(items, { id: id });

export const buildMenu = (items, ids) => {
  return ids
    .map(id => getItemById(items, id))
    .map(item =>
      item.subPages
        ? {
            ...item,
            subPages: buildMenu(items, item.subPages)
          }
        : item
    );
};
