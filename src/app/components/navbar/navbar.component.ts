import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	
	@Output() onClick = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	toggleSidebar() {
		this.onClick.emit();
	}

}
