import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forks'
})
export class ForksPipe implements PipeTransform {

  transform(value: number, args?: any){
    if(value < 5){
      return value + "forks are fun"
    }
    else{
      return value + "Its open Source, A free world"
    }
  }

}
