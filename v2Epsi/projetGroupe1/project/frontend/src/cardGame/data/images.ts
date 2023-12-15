import Watch from "assets/images/1.png";
import Enterprising from "assets/images/2.png";
import Stuck from "assets/images/3.png";
import Arm from "assets/images/4.png";
import Skirt from "assets/images/5.png";
import Shoulder from "assets/images/6.png";
import Card from "assets/images/card.png";
import reversedWatch from "assets/images/1reversed.png";
import reversedEnterprising from "assets/images/2reversed.png";
import reversedStuck from "assets/images/3reversed.png";
import reversedArm from "assets/images/4reversed.png";
import reversedSkirt from "assets/images/5reversed.png";
import reversedShoulder from "assets/images/6reversed.png";

export type ICard = {
  name: string;
  pic: any;
  flipped: boolean;
  match: boolean;
};

const imgArray: Array<ICard> = [
  {
    name: "Watch",
    pic: Watch,
    flipped: false,
    match: false,
  },
  {
    name: "Watch",
    pic: reversedWatch,
    flipped: false,
    match: false,
  },
  {
    name: "Enterprising",
    pic: Enterprising,
    flipped: false,
    match: false,
  },
  {
    name: "Enterprising",
    pic: reversedEnterprising,
    flipped: false,
    match: false,
  },
  {
    name: "Stuck",
    pic: Stuck,
    flipped: false,
    match: false,
  },
  {
    name: "Stuck",
    pic: reversedStuck,
    flipped: false,
    match: false,
  },
  {
    name: "Arm",
    pic: Arm,
    flipped: false,
    match: false,
  },
  {
    name: "Arm",
    pic: reversedArm,
    flipped: false,
    match: false,
  },
  {
    name: "Skirt",
    pic: Skirt,
    flipped: false,
    match: false,
  },
  {
    name: "Skirt",
    pic: reversedSkirt,
    flipped: false,
    match: false,
  },
  {
    name: "Shoulder",
    pic: Shoulder,
    flipped: false,
    match: false,
  },
  {
    name: "Shoulder",
    pic: reversedShoulder,
    flipped: false,
    match: false,
  },
];

export const images: ICard[] = imgArray;

export const cover = [
  {
    name: "card",
    pic: Card,
    flipped: false,
  },
];
