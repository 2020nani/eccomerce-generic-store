import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetsUrl',
})
export class AssetsUrlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const assetsUrl = __webpack_public_path__;
    return assetsUrl + value;
  }

}
