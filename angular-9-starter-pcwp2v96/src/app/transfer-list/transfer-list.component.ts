import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css'],
})
export class TransferListComponent implements OnInit {
  listA = [
    { name: 'Item 1', selected: false },
    { name: 'Item 2', selected: false },
    { name: 'Item 3', selected: false },
    { name: 'Item 4', selected: false },
  ];

  listB = [
    { name: 'Item 5', selected: false },
    { name: 'Item 6', selected: false },
    { name: 'Item 7', selected: false },
    { name: 'Item 8', selected: false },
  ];

  transferSelected(
    from: { name: string; selected: boolean }[],
    to: { name: string; selected: boolean }[]
  ): void {
    const selectedItems = from.filter((item) => item.selected);
    to.push(...selectedItems);
    this.removeTransferredItems(from);
  }

  transferAll(
    from: { name: string; selected: boolean }[],
    to: { name: string; selected: boolean }[]
  ): void {
    to.push(...from);
    from.length = 0; // Clear the source list
  }

  private removeTransferredItems(
    list: { name: string; selected: boolean }[]
  ): void {
    const unselectedItems = list.filter((item) => !item.selected);
    list.length = 0;
    list.push(...unselectedItems);
  }

  isTransferSelectedDisabled(
    from: { name: string; selected: boolean }[]
  ): boolean {
    return !from.some((item) => item.selected);
  }

  isTransferAllDisabled(from: { name: string; selected: boolean }[]): boolean {
    return from.length === 0;
  }

  constructor() {}

  ngOnInit() {}
}
