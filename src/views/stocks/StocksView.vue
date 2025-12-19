<template>
	<div class="grid gap-5 lg:gap-7.5">
		<!-- Header -->
		<div
			class="kt-card-header flex-wrap gap-4 items-center justify-between px-0">
			<h2 class="text-xl font-semibold">Stocks</h2>

			<RouterLink
				to="/stocks/add"
				class="kt-btn kt-btn-light flex items-center gap-1">
				<i class="ki-outline ki-plus"></i>
				<span>Add Stock</span>
			</RouterLink>
		</div>
		<div class="kt-card kt-card-grid min-w-full">
			<!-- Header with search and simple filters -->
			<div class="kt-card-header flex-wrap gap-2">
				<div class="flex flex-wrap gap-2 lg:gap-5">
					<div class="flex">
						<label class="kt-input">
							<i class="ki-filled ki-magnifier"></i>
							<input
								class="kt-input kt-input-ghost"
								placeholder="Search stocks"
								type="text"
								data-kt-datatable-search="#stocks_datatable" />
						</label>
					</div>

					<div class="flex flex-wrap gap-2.5">
						<select
							class="kt-select w-48"
							data-kt-select="true"
							data-kt-select-enable-search="true"
							data-kt-select-search-placeholder="Search"
							data-kt-select-placeholder="Product Group"
							data-kt-select-config='{
		"optionsClass": "kt-scrollable overflow-auto max-h-[250px]"
	}'>
							<option value="group-1">Group 1</option>
							<option value="group-2">Group 2</option>
							<option value="group-3">Group 3</option>
							<option value="group-4">Group 4</option>
							<option value="group-5">Group 5</option>
							<option value="group-6">Group 6</option>
							<option value="group-7">Group 7</option>
							<option value="group-8">Group 8</option>
							<option value="group-9">Group 9</option>
							<option value="group-10">Group 10</option>
						</select>
					</div>
				</div>
			</div>

			<!-- Datatable -->
			<div class="kt-card-content">
				<div
					id="stocks_datatable"
					class="kt-card-table"
					data-kt-datatable="true"
					data-kt-datatable-page-size="10"
					data-kt-datatable-state-save="true">
					<div class="kt-table-wrapper kt-scrollable">
						<table
							class="kt-table kt-table-border"
							data-kt-datatable-table="true">
							<thead>
								<tr>
									<th class="min-w-[120px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> Product ID (PI) </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[140px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label">
												Product Parent ID
											</span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[160px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> Product Type </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[180px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> Origin </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[120px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> GRN </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[160px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> Sale Status </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[170px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> Product Group </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[140px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> Status </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[160px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> Manufacturer </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[150px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> Part No </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[200px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> Stock Location </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[220px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> Configuration </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[200px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> Booked in Date </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[200px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> Harvested Date </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[170px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> Visit Status </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[130px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> Visit ID </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[160px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label"> Actions </span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="text-center">1</td>
									<td class="text-center">1</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="whole-item" selected>Whole Item</option>
											<option value="accessory">Accessory</option>
											<option value="harvested">Harvested</option>
										</select>
									</td>
									<td class="text-center">St Marry Hospital</td>
									<td class="text-center">123456</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="quarantine" selected>Quarantine</option>
											<option value="used">Used</option>
											<option value="refurbished">Refurbished</option>
											<option value="repaired">Repaired</option>
											<option value="new">New</option>
										</select>
									</td>
									<td class="text-center">SCANNER</td>
									<td class="text-center">Used</td>
									<td class="text-center">ALOKA</td>
									<td class="text-center">SSD-3500SX</td>
									<td class="text-center">PROBO FR Nantes</td>
									<td class="text-center">-</td>
									<td class="text-center">12th Dec 24&nbsp;11:00 AM</td>
									<td class="text-center">-</td>
									<td class="text-center">Returned to Stock</td>
									<td class="text-center">
										<RouterLink
											class="kt-link kt-link-underlined kt-link-dashed"
											to="/visit/1">
											1
										</RouterLink>
									</td>
									<td class="text-center">
										<div class="flex items-center justify-center gap-2">
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-eye"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-pencil"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost kt-btn-danger">
												<i class="ki-outline ki-trash"></i>
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td class="text-center">2</td>
									<td class="text-center">1</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="whole-item" selected>Whole Item</option>
											<option value="accessory">Accessory</option>
											<option value="harvested">Harvested</option>
										</select>
									</td>
									<td class="text-center">St Marry Hospital</td>
									<td class="text-center">123456</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="quarantine" selected>Quarantine</option>
											<option value="used">Used</option>
											<option value="refurbished">Refurbished</option>
											<option value="repaired">Repaired</option>
											<option value="new">New</option>
										</select>
									</td>
									<td class="text-center">PROBE</td>
									<td class="text-center">Used</td>
									<td class="text-center">AMARON</td>
									<td class="text-center">-</td>
									<td class="text-center">-</td>
									<td class="text-center">-</td>
									<td class="text-center">12th Dec 24&nbsp;11:00 AM</td>
									<td class="text-center">-</td>
									<td class="text-center">Out For Visit</td>
									<td class="text-center">
										<RouterLink
											class="kt-link kt-link-underlined kt-link-dashed"
											to="/visit/2">
											2
										</RouterLink>
									</td>
									<td class="text-center">
										<div class="flex items-center justify-center gap-2">
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-eye"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-pencil"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost kt-btn-danger">
												<i class="ki-outline ki-trash"></i>
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td class="text-center">3</td>
									<td class="text-center">1</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="whole-item" selected>Whole Item</option>
											<option value="accessory">Accessory</option>
											<option value="harvested">Harvested</option>
										</select>
									</td>
									<td class="text-center">St Marry Hospital</td>
									<td class="text-center">123456</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="quarantine" selected>Quarantine</option>
											<option value="used">Used</option>
											<option value="refurbished">Refurbished</option>
											<option value="repaired">Repaired</option>
											<option value="new">New</option>
										</select>
									</td>
									<td class="text-center">CONSUMABLE</td>
									<td class="text-center">Calibre Models</td>
									<td class="text-center">ACUSON</td>
									<td class="text-center">6C1HD</td>
									<td class="text-center">A5</td>
									<td class="text-center">-</td>
									<td class="text-center">12th Dec 24&nbsp;11:00 AM</td>
									<td class="text-center">13th Dec 24&nbsp;12:00 PM</td>
									<td class="text-center">-</td>
									<td class="text-center">
										<RouterLink
											class="kt-link kt-link-underlined kt-link-dashed"
											to="/visit/3">
											3
										</RouterLink>
									</td>
									<td class="text-center">
										<div class="flex items-center justify-center gap-2">
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-eye"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-pencil"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost kt-btn-danger">
												<i class="ki-outline ki-trash"></i>
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td class="text-center">4</td>
									<td class="text-center">1</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="whole-item" selected>Whole Item</option>
											<option value="accessory">Accessory</option>
											<option value="harvested">Harvested</option>
										</select>
									</td>
									<td class="text-center">St Marry Hospital</td>
									<td class="text-center">123456</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="quarantine" selected>Quarantine</option>
											<option value="used">Used</option>
											<option value="refurbished">Refurbished</option>
											<option value="repaired">Repaired</option>
											<option value="new">New</option>
										</select>
									</td>
									<td class="text-center">CONSUMABLE</td>
									<td class="text-center">New</td>
									<td class="text-center">SONY</td>
									<td class="text-center">UP-D23MD</td>
									<td class="text-center">O12(New)</td>
									<td class="text-center">Replacement Battery</td>
									<td class="text-center">12th Dec 24&nbsp;11:00 AM</td>
									<td class="text-center">14th Dec 24&nbsp;9:30 AM</td>
									<td class="text-center">Out For Visit</td>
									<td class="text-center">
										<RouterLink
											class="kt-link kt-link-underlined kt-link-dashed"
											to="/visit/4">
											4
										</RouterLink>
									</td>
									<td class="text-center">
										<div class="flex items-center justify-center gap-2">
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-eye"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-pencil"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost kt-btn-danger">
												<i class="ki-outline ki-trash"></i>
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td class="text-center">5</td>
									<td class="text-center">5</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="whole-item" selected>Whole Item</option>
											<option value="accessory">Accessory</option>
											<option value="harvested">Harvested</option>
										</select>
									</td>
									<td class="text-center">St Marry Hospital</td>
									<td class="text-center">789012</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="quarantine" selected>Quarantine</option>
											<option value="used">Used</option>
											<option value="refurbished">Refurbished</option>
											<option value="repaired">Repaired</option>
											<option value="new">New</option>
										</select>
									</td>
									<td class="text-center">COLOUR PRINTER</td>
									<td class="text-center">Not tested</td>
									<td class="text-center">COOLER MASTER</td>
									<td class="text-center">705 Mobile DVR</td>
									<td class="text-center">BAY 134AC</td>
									<td class="text-center">PC with Intel I5 Processor</td>
									<td class="text-center">4th Jan 2025&nbsp;2:30 PM</td>
									<td class="text-center">-</td>
									<td class="text-center">Out For Visit</td>
									<td class="text-center">
										<RouterLink
											class="kt-link kt-link-underlined kt-link-dashed"
											to="/visit/5">
											5
										</RouterLink>
									</td>
									<td class="text-center">
										<div class="flex items-center justify-center gap-2">
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-eye"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-pencil"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost kt-btn-danger">
												<i class="ki-outline ki-trash"></i>
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td class="text-center">6</td>
									<td class="text-center">5</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="whole-item" selected>Whole Item</option>
											<option value="accessory">Accessory</option>
											<option value="harvested">Harvested</option>
										</select>
									</td>
									<td class="text-center">St Marry Hospital</td>
									<td class="text-center">789012</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="quarantine" selected>Quarantine</option>
											<option value="used">Used</option>
											<option value="refurbished">Refurbished</option>
											<option value="repaired">Repaired</option>
											<option value="new">New</option>
										</select>
									</td>
									<td class="text-center">CONSUMABLE</td>
									<td class="text-center">New</td>
									<td class="text-center">APPLE</td>
									<td class="text-center">i MAC</td>
									<td class="text-center">Workshop U.S</td>
									<td class="text-center">Computer 21.5 inch</td>
									<td class="text-center">4th Jan 2025&nbsp;2:30 PM</td>
									<td class="text-center">4th Jan 2025&nbsp;6:45 PM</td>
									<td class="text-center">Out For Visit</td>
									<td class="text-center">
										<RouterLink
											class="kt-link kt-link-underlined kt-link-dashed"
											to="/visit/6">
											6
										</RouterLink>
									</td>
									<td class="text-center">
										<div class="flex items-center justify-center gap-2">
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-eye"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-pencil"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost kt-btn-danger">
												<i class="ki-outline ki-trash"></i>
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td class="text-center">7</td>
									<td class="text-center">5</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="whole-item" selected>Whole Item</option>
											<option value="accessory">Accessory</option>
											<option value="harvested">Harvested</option>
										</select>
									</td>
									<td class="text-center">St Marry Hospital</td>
									<td class="text-center">789012</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="quarantine" selected>Quarantine</option>
											<option value="used">Used</option>
											<option value="refurbished">Refurbished</option>
											<option value="repaired">Repaired</option>
											<option value="new">New</option>
										</select>
									</td>
									<td class="text-center">CONSUMABLE</td>
									<td class="text-center">New</td>
									<td class="text-center">SONY</td>
									<td class="text-center">UP-D23MD</td>
									<td class="text-center">O12(New)</td>
									<td class="text-center">Replacement Battery</td>
									<td class="text-center">4th Jan 2025&nbsp;2:30 PM</td>
									<td class="text-center">6th Jan 2025&nbsp;7:34 PM</td>
									<td class="text-center">Out For Visit</td>
									<td class="text-center">
										<RouterLink
											class="kt-link kt-link-underlined kt-link-dashed"
											to="/visit/7">
											7
										</RouterLink>
									</td>
									<td class="text-center">
										<div class="flex items-center justify-center gap-2">
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-eye"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-pencil"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost kt-btn-danger">
												<i class="ki-outline ki-trash"></i>
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td class="text-center">8</td>
									<td class="text-center">5</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="whole-item" selected>Whole Item</option>
											<option value="accessory">Accessory</option>
											<option value="harvested">Harvested</option>
										</select>
									</td>
									<td class="text-center">St Marry Hospital</td>
									<td class="text-center">789012</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="quarantine" selected>Quarantine</option>
											<option value="used">Used</option>
											<option value="refurbished">Refurbished</option>
											<option value="repaired">Repaired</option>
											<option value="new">New</option>
										</select>
									</td>
									<td class="text-center">PROBE</td>
									<td class="text-center">Not tested</td>
									<td class="text-center">COOLER MASTER</td>
									<td class="text-center">705 Mobile DVR</td>
									<td class="text-center">BAY 134AC</td>
									<td class="text-center">PC with Intel I5 Processor</td>
									<td class="text-center">4th Jan 2025&nbsp;2:30 PM</td>
									<td class="text-center">-</td>
									<td class="text-center">Out For Visit</td>
									<td class="text-center">
										<RouterLink
											class="kt-link kt-link-underlined kt-link-dashed"
											to="/visit/8">
											8
										</RouterLink>
									</td>
									<td class="text-center">
										<div class="flex items-center justify-center gap-2">
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-eye"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-pencil"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost kt-btn-danger">
												<i class="ki-outline ki-trash"></i>
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td class="text-center">9</td>
									<td class="text-center">1</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="whole-item" selected>Whole Item</option>
											<option value="accessory">Accessory</option>
											<option value="harvested">Harvested</option>
										</select>
									</td>
									<td class="text-center">St Marry Hospital</td>
									<td class="text-center">123456</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="quarantine" selected>Quarantine</option>
											<option value="used">Used</option>
											<option value="refurbished">Refurbished</option>
											<option value="repaired">Repaired</option>
											<option value="new">New</option>
										</select>
									</td>
									<td class="text-center">SPARE PART</td>
									<td class="text-center">New</td>
									<td class="text-center">APPLE</td>
									<td class="text-center">i MAC</td>
									<td class="text-center">Workshop U.S</td>
									<td class="text-center">Computer 21.5 inch</td>
									<td class="text-center">4th Jan 2025&nbsp;2:30 PM</td>
									<td class="text-center">-</td>
									<td class="text-center">Out For Visit</td>
									<td class="text-center">
										<RouterLink
											class="kt-link kt-link-underlined kt-link-dashed"
											to="/visit/9">
											9
										</RouterLink>
									</td>
									<td class="text-center">
										<div class="flex items-center justify-center gap-2">
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-eye"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-pencil"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost kt-btn-danger">
												<i class="ki-outline ki-trash"></i>
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td class="text-center">10</td>
									<td class="text-center">10</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="whole-item" selected>Whole Item</option>
											<option value="accessory">Accessory</option>
											<option value="harvested">Harvested</option>
										</select>
									</td>
									<td class="text-center">St Marry Hospital</td>
									<td class="text-center">654321</td>
									<td class="text-center">
										<select class="kt-select w-full" data-kt-select="true">
											<option value="quarantine" selected>Quarantine</option>
											<option value="used">Used</option>
											<option value="refurbished">Refurbished</option>
											<option value="repaired">Repaired</option>
											<option value="new">New</option>
										</select>
									</td>
									<td class="text-center">COMPUTER</td>
									<td class="text-center">Calibre Models</td>
									<td class="text-center">ACUSON</td>
									<td class="text-center">6C1HD</td>
									<td class="text-center">A5</td>
									<td class="text-center">Replacement Battery</td>
									<td class="text-center">10th Jan 25&nbsp;8:30 AM</td>
									<td class="text-center">-</td>
									<td class="text-center">Returned to Stock</td>
									<td class="text-center">
										<RouterLink
											class="kt-link kt-link-underlined kt-link-dashed"
											to="/visit/10">
											10
										</RouterLink>
									</td>
									<td class="text-center">
										<div class="flex items-center justify-center gap-2">
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-eye"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost">
												<i class="ki-outline ki-pencil"></i>
											</button>
											<button
												type="button"
												class="kt-btn kt-btn-icon kt-btn-sm kt-btn-ghost kt-btn-danger">
												<i class="ki-outline ki-trash"></i>
											</button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<!-- Datatable footer (page size + pagination) -->
					<div
						class="kt-datatable-toolbar justify-center md:justify-between flex-col md:flex-row gap-5 text-secondary-foreground text-sm font-medium">
						<div class="flex items-center gap-2 order-2 md:order-1">
							Show
							<select
								class="kt-select kt-select-sm w-16"
								name="perpage"
								data-kt-datatable-size="true"></select>
							per page
						</div>
						<div class="flex items-center gap-4 order-1 md:order-2">
							<span data-kt-datatable-info="true"></span>
							<div
								class="kt-datatable-pagination"
								data-kt-datatable-pagination="true"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
