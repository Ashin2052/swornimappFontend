import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  ConfirmDialogComponent,
  ConfirmDialogModel,
} from '../confirm-dialog/confirm-dialog.component';

const DIALOG_BOTTOM_GAP = 10;

export function getDialogMaxHeight(element: HTMLElement, desirableMaxHeight?: string) {
  const absoluteMaxHeight = `calc(100vh - ${
    element.getBoundingClientRect().bottom + DIALOG_BOTTOM_GAP
  }px)`;
  return desirableMaxHeight
    ? `min(${absoluteMaxHeight}, ${desirableMaxHeight})`
    : absoluteMaxHeight;
}

export function getConfirmDialogRef(
  dialog: MatDialog,
  message: string
): MatDialogRef<ConfirmDialogComponent, boolean> {
  return dialog.open<ConfirmDialogComponent, ConfirmDialogModel, boolean>(ConfirmDialogComponent, {
    maxWidth: '400px',
    autoFocus: false,
    hasBackdrop: true,
    panelClass: 'zero-padding-dialog-panel',
    data: { title: 'Confirm Action', message },
  });
}
