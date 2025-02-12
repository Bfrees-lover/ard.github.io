
import { Module } from "./types";
import { basicsModule } from "./basics";
import { communicationModules } from "./communication";
import { displayModules } from "./displays";
import { sensorModules } from "./sensors";
import { motorModules } from "./motors";
import { powerModules } from "./power";
import { wirelessModules } from "./wireless";
import { advancedModules } from "./advanced";
import { securityModules } from "./security";
import { audioModules } from "./audio";
import { roboticsModules } from "./robotics";
import { gameModules } from "./games";
import { homeAutomationModules } from "./home-automation";
import { weatherModules } from "./weather";

export const modules: Module[] = [
  basicsModule,
  ...powerModules,
  ...wirelessModules,
  ...communicationModules,
  ...displayModules,
  ...sensorModules,
  ...motorModules,
  ...advancedModules,
  ...securityModules,
  ...audioModules,
  ...roboticsModules,
  ...gameModules,
  ...homeAutomationModules,
  ...weatherModules
];

export type { Module };
