import { PipeTransform, Pipe } from '@angular/core';
import { ITodoList } from '../services/data.service';

@Pipe({
    name: 'TodoByCategoryPipe',
    pure: false
})

export class TodoByCategoryPipe implements PipeTransform {
    transform(items: Array<ITodoList>, id: number): any {
        if (!items || !id) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.ItemCategoryId === id);
    }
}
