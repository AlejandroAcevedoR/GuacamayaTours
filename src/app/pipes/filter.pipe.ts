import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sname: string, sstar: string, sprice: string, sstate: string): any {
    if (sname === '' && sstar === '' && sprice === '' && sstate === '') {
      return value;
    }
    console.log(sprice);

    let hotelesfiltrados: any[] = value;
    if (sname !== ''){
      const temp: any[] = hotelesfiltrados;
      const temp2: any[] = [];
      for (let i = 0; i < temp.length; i++) {
        let hotdata: string = temp[i].name;
        if (hotdata.toLocaleLowerCase().includes(sname)) {
          temp2.push(temp[i]);
        }
      }
      hotelesfiltrados = temp2;
    }
    if (sstar !== ''){
      const temp: any[] = hotelesfiltrados;
      const temp2: any[] = [];
      for (let i = 0; i < temp.length; i++) {
        let hotdata: number = temp[i].stars;
        if (hotdata.toString().includes(sstar)) {
          temp2.push(temp[i]);
        }
      }
      hotelesfiltrados = temp2;
    }
    if (sprice !== ''){
      const temp: any[] = hotelesfiltrados;
      const temp2: any[] = [];
      for (let i = 0; i < temp.length; i++) {
        let hotdata: number = temp[i].price;
        if (hotdata.toString().includes(sprice)) {
          temp2.push(temp[i]);
        }
      }
      hotelesfiltrados = temp2;
    }
    if (sstate !== ''){
      const temp: any[] = hotelesfiltrados;
      const temp2: any[] = [];
      for (let i = 0; i < temp.length; i++) {
        let hotdata: string = temp[i].state;
        if (hotdata.toLocaleLowerCase().includes(sstate)) {
          temp2.push(temp[i]);
        }
      }
      hotelesfiltrados = temp2;
    }
    return hotelesfiltrados;
  }

}
