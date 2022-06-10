export interface IAppType {
  id: number;
  type: string;
  name: string;
}

const data: IAppType[] = [
  {
    id: 1,
    type: "puzzle",
    name: "puzzle game",
  },
  {
    id: 2,
    type: "utility",
    name: "utility app",
  },
  {
    id: 3,
    type: "physics",
    name: "physics simulation game",
  },
  {
    id: 4,
    type: "livewallpaper",
    name: "live wallpaper",
  },
  {
    id: 5,
    type: "miscelanous",
    name: "other app",
  },
];


export default data;
