import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByName'
})

export class FilterByName implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter( function(o) {
            return Object.keys(o).some( function(k) {
                if(k === 'name')
                    return o[k].toString().toLowerCase().includes( searchText );
            });
        });
    }
  }
