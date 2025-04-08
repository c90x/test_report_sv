<div class="flex flex-col gap-2 font-medium">
	<h1 class="text-4xl font-black">Report</h1>

	<p class="text-lg">
		New<br/> 
		890348659389034865938903486593890348659389034865938903486593890348659389034865938903486593890348659389034865938903486593890348659389034865938903486593<br/> 
		site
	</p>

	{#each Array.from({ length: 2 }) as _, i}
		<p class="text-base">Heeyy</p>
	{/each}

	<h1 class="break-before-page text-2xl font-black">New Page</h1>
	<p class="text-lg">Yeey!</p>

	<div class="overflow-hidden rounded-xl border border-gray-700 shadow-md">
		<table class="min-w-full divide-y divide-gray-700">
			<thead>
				<tr>
					<th scope="col" class="bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">Factors</th>
					<th scope="col" class="bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">Germany</th>
					<th scope="col" class="bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">USA</th>
					<th scope="col" class="bg-gray-800 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">Canada</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-700 bg-gray-900">
				{#each Array.from({ length: 5 }) as _, i}
					<tr class={`${i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'} transition-all duration-200 ease-in-out hover:bg-blue-900`}>
						<td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-100">Factor{i + 1}</td>
						<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-300">Data</td>
						<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-300">Data</td>
						<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-300">Data</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
