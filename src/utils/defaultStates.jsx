import { v4 as uuidv4 } from "uuid";

export function GeneratorTimer(settings) {
  let object = {
    id: uuidv4(),
    lastStart: null,  
    currentTime: 0,

    isCurrent: true,
    isActive: false,
    isEnd: false,
    reset() {
      this.currentTime = 0;
      this.stillTime = this.originalTimes[0];

      this.isActive = false;
      this.isEnd = false;
    }
  }
  object.name = settings?.name ?? 'Default Timer';
  object.originalTimes = settings?.originalTimes ?? [1000, ];
  object.stillTime = object.originalTimes[0]

  object.isActive = settings?.isActive ?? object.isActive;
  return object
}
