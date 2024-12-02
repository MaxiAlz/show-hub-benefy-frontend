import { GiTicket } from 'react-icons/gi';
import { RoundedFilledButton, RoundedOutlineButton } from '../../../components';
import { EventDetailLookLike, TicketType } from '../types/homeTypes';
import {
  EventCart,
  TicketItem,
  useCartTicketStorage,
} from '../../../hooks/useCardTicketStorage';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface TicketsPourchaseTablePorps {
  eventId: number;
  tickets: TicketType[];
  eventData: EventDetailLookLike;
}
const TicketsPourchaseTable = ({
  eventId,
  tickets,
  eventData,
}: TicketsPourchaseTablePorps) => {
  const { cartsPurchase, addItem, removeItem } = useCartTicketStorage();
  const navigate = useNavigate();

  const handleQuantityChange = (ticketType: TicketType, quantity: number) => {
    if (quantity === 0) {
      removeItem(ticketType.id);
    } else {
      addItem(eventId, eventData.name, ticketType, quantity);
    }
  };

  const clearEventCart = () => {
    tickets.forEach((ticket) => {
      removeItem(ticket.id);
    });
  };

  const hasTicketsInCart = (carts: EventCart[], eventId: number) => {
    return carts
      .find((cart) => cart.eventId === eventId)
      ?.ticketItems.some((item: TicketItem) => item.quantity > 0);
  };

  return (
    <div className="border border-black rounded-lg mb-5 bg-white px-5 pt-6 pb-2.5 shadow-lg dark:border-white dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="w-1/3 py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Tipo de entrada
              </th>
              <th className="w-1/3 py-4 px-4 font-medium text-black dark:text-white">
                Valor
              </th>
              <th className="w-1/3 py-4 px-4 font-medium text-black dark:text-white">
                Cantidad
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticketType, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {ticketType.name}
                  </h5>
                  <p className="text-sm truncate hidden sm:block">
                    {ticketType.description}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {ticketType.price === 0
                      ? 'Gratuito'
                      : `$ ${ticketType.price}`}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                  <select
                    name="categoryId"
                    id="categories"
                    value={
                      cartsPurchase
                        .find((cart) => cart.eventId === eventId)
                        ?.ticketItems.find(
                          (item) => item.ticketTypeId === ticketType.id,
                        )?.quantity || 0
                    }
                    onChange={(e) =>
                      handleQuantityChange(
                        ticketType,
                        parseInt(e.target.value, 10),
                      )
                    }
                    className="border rounded-lg block lg:w-1/2 w-full py-2.5 dark:bg-black focus:border-primary my-2"
                  >
                    <option key={-1} value={0}>
                      0
                    </option>
                    {Array.from({ length: ticketType.maxAmountPerUser }).map(
                      (_, index) => (
                        <option key={index} value={index + 1}>
                          {index + 1}
                        </option>
                      ),
                    )}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between gap-2 my-5">
        <RoundedOutlineButton
          text="Limpiar"
          icon={MdDelete}
          disabled={!hasTicketsInCart(cartsPurchase, eventId)}
          onClick={clearEventCart}
        />
        <RoundedFilledButton
          disabled={!hasTicketsInCart(cartsPurchase, eventId)}
          text="Comprar tickets"
          icon={<GiTicket size={25} />}
          onClick={() => {
            navigate(`/cart/${eventId}/pourchase`);
          }}
        />
      </div>
    </div>
  );
};

export { TicketsPourchaseTable };
