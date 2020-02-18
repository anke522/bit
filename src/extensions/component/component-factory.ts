import Capsule from '../../environment/capsule-builder';
import ConsumerComponent from '../../consumer/component';
import Component from './component';
import State from './state';
import ComponentID from './id';
import { ModelComponent } from '../../scope/models';
import Version from '../../version';

export default class ComponentFactory {
  constructor(
    /**
     * instance of the capsule orchestrator
     */
    private capsuleOrchestrator: Capsule
  ) {}

  create() {}

  /**
   * instantiate a component object from a legacy `ComponentVersions` type object.
   */
  fromComponentVersions(legacyComponent: ModelComponent, version: Version) {}

  /**
   * instantiate a component object from a legacy `ConsumerComponent` type object.
   */
  fromLegacyComponent(legacyComponent: ConsumerComponent): Component {
    return new Component(
      ComponentID.fromLegacy(legacyComponent.id),
      null,
      State.fromLegacy(legacyComponent),
      undefined,
      this.capsuleOrchestrator
    );
  }
}
