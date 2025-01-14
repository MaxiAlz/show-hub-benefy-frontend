import React from 'react';
import { MdCancel, MdDeleteForever } from 'react-icons/md';
import { useDeleteTicketMutation } from '../../hooks';
import { useAlert } from '../../../../context/AlertContext';
import {
  RoundedFilledButton,
  RoundedOutlineButton,
} from '../../../../components';

interface TicketToDeleteState {
  ticketId: number;
  ticketName: string;
}

interface DeleteTicketProps {
  ticketToDelete: TicketToDeleteState;
  setOpenConfirmModal: React.Dispatch<React.SetStateAction<boolean>>;
  refetchTickets?: () => void;
}

const DeleteTicket = ({
  ticketToDelete,
  setOpenConfirmModal,
  refetchTickets,
}: DeleteTicketProps) => {
  const useDeleteTicket = useDeleteTicketMutation();
  const { showErrorToast, showDefaultToast } = useAlert();

  const handleDeleteTicket = () => {
    useDeleteTicket.mutate(ticketToDelete.ticketId, {
      onSuccess: (arg) => {
        showDefaultToast('Ticket Eliminado');
        setOpenConfirmModal(false);
        refetchTickets?.();
      },
      onError: (error) => {
        showErrorToast('No se pudo eliminar el Ticket');
        console.error('error :>> ', error);
      },
    });
  };

  return (
    <>
      <div>
        Se elimara el siguiente ticket:{' '}
        <span className="text-xl font-bold text-black dark:text-white">
          "{ticketToDelete.ticketName}"
        </span>
      </div>
      <div className="my-4 border-t border-gray-300"></div>
      <div className="flex w-full justify-between">
        <RoundedOutlineButton
          className=""
          icon={MdCancel}
          text="Cancelar"
          type="submit"
          onClick={() => setOpenConfirmModal(false)}
        />
        <RoundedFilledButton
          text="Eliminar Ticket"
          icon={<MdDeleteForever size={25} />}
          type="submit"
          isLoading={useDeleteTicket.isPending}
          onClick={handleDeleteTicket}
        />
      </div>
    </>
  );
};

export { DeleteTicket };
