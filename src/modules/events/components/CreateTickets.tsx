import { Tabs } from 'flowbite-react';
import { HiAdjustments } from 'react-icons/hi';
import { GiTicket } from 'react-icons/gi';
import { MdEditNote } from 'react-icons/md';
import { ManageTickets } from './ManageTickets';
import { ManageReservations } from './ManageReservations';


const CreateTickets = () => {
  return (
    <article className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-10 w-full flex">
      <Tabs variant="underline">
        <Tabs.Item active title="Crear entradas" icon={GiTicket}>
          <ManageTickets />
        </Tabs.Item>
        <Tabs.Item className="uppercase" title="Reservar" icon={MdEditNote}>
          <ManageReservations />
        </Tabs.Item>
        <Tabs.Item title="Configuraciones" icon={HiAdjustments}>
          This is{' '}
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <div className="my-4 border-t border-gray-300"></div>
      </Tabs>
    </article>
  );
};

export { CreateTickets };
