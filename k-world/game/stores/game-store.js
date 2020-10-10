import { observable } from "mobx";
//observable defines a trackable field that stores the state.
class GameStore {
  //these are states
  @observable characterPosition = { x: 0, y: 0 };
  @observable stageX = 0;
  @observable portalPosition = { x: 0, y: 0 };
  @observable isPortalOpen = false;

  //these set states
  setCharacterPosition(position) {
    this.characterPosition = position;
  }

  setStageX(x) {
    //movement gets stuck w/o this
    if (x > 0) {
      this.stageX = 0;
    } else if (x < -2048) {
      this.stageX = -2048;
    } else {
      this.stageX = x;
    }
  }

  setPortalPosition(position) {
    this.portalPosition = position;
  }

  openPortal() {
    this.isPortalOpen = true;
  }

  closePortal() {
    this.isPortalOpen = false;
  }
}

export default new GameStore();
//this is a new instance "active"
