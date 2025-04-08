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
	<p class="text-lg">
		Lorem ipsum dolor sit amet consectetur adipiscing elit.
	</p>

	<div class="my-4 overflow-hidden rounded-xl border border-gray-700 shadow-md">
		<table class="noise-gradient min-w-full table-fixed divide-y divide-gray-700 text-base">
			<colgroup>
				<col class="w-auto" />
				{#each Array.from({ length: 3 }) as _}
					<col class="w-1/4" />
				{/each}
			</colgroup>
			<thead>
				<tr class="">
					<th
						scope="col"
						class="px-6 py-3 text-left text-sm font-bold tracking-wider text-gray-300 uppercase"
					>
						Factors
					</th>
					<th
						scope="col"
						class="px-6 py-3 text-left text-sm font-bold tracking-wider text-gray-300 uppercase"
					>
						Germany
					</th>
					<th
						scope="col"
						class="px-6 py-3 text-left text-sm font-bold tracking-wider text-gray-300 uppercase"
					>
						USA
					</th>
					<th
						scope="col"
						class="px-6 py-3 text-left text-sm font-bold tracking-wider text-gray-300 uppercase"
					>
						Canada
					</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-700 bg-gray-900">
				{#each Array.from({ length: 5 }) as _, i}
					<tr class={`${i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}`}>
						<td class="px-6 py-4 font-medium whitespace-nowrap text-gray-100">
							Factor {i + 1}
						</td>
						<td class="px-6 py-4 whitespace-nowrap">—</td>
						<td class="px-6 py-4 whitespace-nowrap">—</td>
						<td class="px-6 py-4 whitespace-nowrap">—</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	.noise-gradient {
		background-image: url('./Gradient.jpg');
		background-repeat: no-repeat;
		background-position: center top;
		background-size: cover;
	}
</style>
