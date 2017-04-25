import { Component } from '@angular/core';

@Component({
    selector: 'test-shared-component',
    template: `
       <section>
	   		<h1>Test shared component (with child ionic component)</h1>
			<ion-badge item-right>260k</ion-badge>
		</section>   
    `
})
export class TestSharedComponent {

    constructor() {}

}