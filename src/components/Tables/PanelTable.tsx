import {
  MdOutlineSearch,
  MdOutlineRemoveRedEye,
  MdDeleteForever,
  MdDownload,
  MdOutlineCreateNewFolder,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { RoundedFilledButton } from '../Buttons';
import { ItemEvent } from '../../modules/events';
import { formatDate } from '../../helpers/formatDate';

interface PanelTableProps {
  tableItems: ItemEvent[] | undefined;
}

const getStateAttributes = (
  state: string,
): { text: string; classes: string } => {
  switch (state) {
    case 'PUBLISHED':
      return { text: 'Publicado', classes: 'bg-success text-success' };
    case 'DRAFT':
      return { text: 'Borrador', classes: 'bg-warning text-warning' };
    case 'FINISHED':
      return { text: 'Finalizado', classes: 'bg-danger text-danger' };
    default:
      return { text: 'Desconocido', classes: 'bg-gray-300 text-gray-500' }; // Valor por defecto
  }
};

const PanelTable = ({ tableItems }: PanelTableProps) => {
  const navigate = useNavigate();
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <section className="flex items-center justify-between mb-2">
        <div className="relative ">
          <button className="absolute left-0 top-1/2 -translate-y-1/2">
            <MdOutlineSearch size={30} />
          </button>

          <input
            type="text"
            placeholder="Buscar evento"
            className="w-full bg-transparent pl-9 pr-4 text-black focus:outline-primary focus:inline-block  dark:text-white xl:w-125 rounded"
          />
        </div>

        <div className="">
          <RoundedFilledButton
            onClick={() => navigate('/panel/events/create')}
            className="flex items-center"
            icon={<MdOutlineCreateNewFolder size={30} />}
            text="Crear Nuevo evento"
          />
        </div>
      </section>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className=" py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                N°
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Titulo
              </th>
              <th className=" py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Cover
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Fecha de realizacion
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tableItems!.map((item, key) => (
              <tr
                key={key}
                onClick={() =>
                  navigate(
                    item.state != 'DRAFT'
                      ? `/panel/events/overview/${item.id}`
                      : `/panel/events/create/${item.id}/tickets/publish`,
                  )
                }
                className="hover:bg-gray-3 dark:hover:bg-meta-4 hover:cursor-pointer"
              >
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {item.id}
                  </h5>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {item.name}
                  </h5>
                  <p className="text-sm">{item.description.slice(0, 25)}</p>
                </td>
                <td className=" py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <div className="h-12.5 w-15 ">
                    <img
                      src={item.photo}
                      alt="Foto Event"
                      className="rounded-lg"
                    />
                  </div>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {formatDate(item.date)}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      getStateAttributes(item.state).classes
                    }`}
                  >
                    {getStateAttributes(item.state).text}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <MdOutlineRemoveRedEye size={24} />
                    </button>
                    <button className="hover:text-primary">
                      <MdDeleteForever size={24} />
                    </button>
                    <button className="hover:text-primary">
                      <MdDownload size={24} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { PanelTable };
