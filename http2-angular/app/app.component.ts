import { Component } from '@angular/core';
import { SimpleChartComponent } from './simplechart/simplechart.component';

@Component({
    selector: 'http2app',
    template: `
        <h1>Angular HTTP2</h1>
        <simplechart></simplechart>
    `,
    directives: [SimpleChartComponent]
})
export class AppComponent { }
