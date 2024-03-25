import { types } from "mobx-state-tree";

const RootStore = types.model("RootStore", {
    users: UsersStore,
    boards: BoardStore,
})

export default RootStore