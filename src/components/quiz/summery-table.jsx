const SummeryTable = () => {
  return (
    <div class="flex flex-col">
      <div class=" min-w-full inline-block align-middle">
        <div class="border rounded-lg shadow overflow-hidden">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr class="divide-x divide-gray-200">
                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                  Question
                </th>
                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                  Dificulty
                </th>
                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">
                  Next Review Date
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  <p>What is one of the primary roles of an operating system in a computer system?</p>
                  <p className="text-xs font-normal text-gray-500">Memory management</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Normal</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Review</td>
                <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <p>7days</p>
                  <p className="text-xs font-normal text-gray-500">2024-09-06</p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  <p>What is one of the primary roles of an operating system in a computer system?</p>
                  <p className="text-xs font-normal text-gray-500">Memory management</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Normal</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Review</td>
                <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <p>7days</p>
                  <p className="text-xs font-normal text-gray-500">2024-09-06</p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  <p>What is one of the primary roles of an operating system in a computer system?</p>
                  <p className="text-xs font-normal text-gray-500">Memory management</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Normal</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Review</td>
                <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <p>7days</p>
                  <p className="text-xs font-normal text-gray-500">2024-09-06</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SummeryTable;
