import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmLabel?: string;
  danger?: boolean;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to perform this action? This cannot be undone.',
  confirmLabel = 'Delete',
  danger = true,
}) => {
  return (
    <Modal open={open} onClose={onClose} title={title} maxWidth="max-w-xs">
      <div className="p-5 text-center">
        <p className="text-sm text-text-2">{message}</p>
      </div>
      <div className="p-4 border-t border-border flex justify-end gap-3 bg-surface">
        <Button variant="ghost" onClick={onClose} autoFocus>Cancel</Button>
        <Button
          className={danger ? 'bg-danger hover:bg-danger/80 text-white' : ''}
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
};
