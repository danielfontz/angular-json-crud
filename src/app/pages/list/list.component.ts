import { Component, OnInit } from '@angular/core';
import { Customer } from '../../core/types/types';
import { CustomersService } from '../../core/services/customers.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  customersList: Customer[] = [];
  constructor(private service: CustomersService) { }
  ngOnInit(): void {
    this.service.list().subscribe((customers) => {
      this.customersList = customers;
    });
  }
}
