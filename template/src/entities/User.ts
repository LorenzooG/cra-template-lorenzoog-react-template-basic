import Entity from "./Entity";

export default class User implements Entity {
  constructor(
    public name: string,
    public email: string,
    public password?: string
  ) {}
}
