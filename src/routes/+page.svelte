<script lang="ts">
</script>

<div class="space-y-2 font-medium">
	<h1 class="text-4xl font-black">Report</h1>

	<p class="text-lg">
		New<br />
		890348659389034865938903486593890348659389034865938903486593890348659389034865938903486593890348659389034865938903486593890348659389034865938903486593<br
		/>
		site
	</p>

	{#each Array.from({ length: 2 }) as _, i}
		<p class="text-base">Heeyy</p>
	{/each}

	<h1 class="new_page text-2xl font-black">New Page</h1>
	<p class="text-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>

	<div class="my-4 overflow-hidden rounded-xl border border-gray-700 shadow-md">
		<table class="noise-gradient min-w-full table-fixed divide-y divide-gray-700 text-base">
			<colgroup>
				<col class="w-auto" />
				{#each Array.from({ length: 3 }) as _}
					<col class="w-1/3" />
				{/each}
			</colgroup>
			<thead>
				<tr class="">
					<th
						scope="col"
						class="px-6 py-3 text-left text-sm font-bold tracking-wider text-gray-100 uppercase"
					>
						Factors
					</th>
					<th
						scope="col"
						class="px-6 py-3 text-right text-sm font-bold tracking-wider text-gray-100 uppercase"
					>
						Germany
					</th>
					<th
						scope="col"
						class="px-6 py-3 text-right text-sm font-bold tracking-wider text-gray-100 uppercase"
					>
						USA
					</th>
					<th
						scope="col"
						class="px-6 py-3 text-right text-sm font-bold tracking-wider text-gray-100 uppercase"
					>
						Canada
					</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-700 bg-gray-900">
				{#if true}
					{@const o = {
						cols: ['Factor 1', 'Factor 2', 'Factor 3', 'Factor 4', 'Factor 5'],
						data: [
							['50%', null, '20%'],
							['20%', '30%', '50%'],
							['10%', null, null],
							[null, '10%', '15%'],
							['1%', '2%', '3%']
						]
					}}
					{#each o.data as _, i}
						<tr class={`${i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}`}>
							<td class="px-6 py-4 font-medium whitespace-nowrap text-gray-100">{o.cols[i]}</td>
							{#each o.data[i] as value, _}
								<td class="px-6 py-4 whitespace-nowrap text-right">{value ?? '—'}</td>
							{/each}
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
</div>

<style>
	.noise-gradient {
		background-image: url('/Gradient2.jpg');
		background-repeat: repeat-y;
		background-position: center top;
		background-size: cover;
	}
</style>
