import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDuplicatesByProperty'
})
export class FilterDuplicatesByPropertyPipe implements PipeTransform {
  transform(value: any[], property: string): any[] {
    const uniqueItems: any[] = [];
    const uniquePropertyValues: Set<any> = new Set();

    value.forEach(item => {
      const propertyValue = item[property];
      if (!uniquePropertyValues.has(propertyValue)) {
        uniqueItems.push(item);
        uniquePropertyValues.add(propertyValue);
      }
    });

    return uniqueItems;
  }
}