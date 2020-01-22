import { Workspace } from '../workspace';
import CapsuleBuilder from './capsule-builder';

export type CapsuleDeps = [Workspace];

export type CapsuleConfig = {};

export default async function provideCapsule(config: CapsuleConfig, [workspace]: CapsuleDeps) {
  const builder = new CapsuleBuilder(workspace.path);
  return builder;
}
