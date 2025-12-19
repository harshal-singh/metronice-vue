<template>
	<div class="grid gap-5 lg:gap-7.5">
		<div class="kt-card kt-card-grid min-w-full border-0 shadow-none">
			<!-- Header -->
			<div
				class="kt-card-header flex-wrap gap-4 items-end justify-between px-0 pb-6">
				<div class="flex flex-col gap-4">
					<h2 class="text-xl font-semibold">Visit/Job Details</h2>
					<div
						class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
						<span class="text-sm font-semibold text-muted-foreground">
							Visit/Job ID
						</span>
						<span class="text-2xl font-bold tracking-wide">
							{{ visitId }}
						</span>
					</div>
				</div>

				<RouterLink
					to="/stocks"
					class="kt-btn kt-btn-light flex items-center gap-1">
					<i class="ki-outline ki-arrow-left"></i>
					<span>Back to Stocks</span>
				</RouterLink>
			</div>

			<div class="kt-card-content space-y-8">
				<!-- Top visit/job meta info -->
				<div
					class="grid gap-y-6 md:grid-cols-3 xl:grid-cols-6 border-b border-border py-6">
					<div class="flex flex-col gap-1">
						<span class="text-xs font-semibold uppercase text-muted-foreground">
							First Reported
						</span>
						<span class="text-sm font-semibold">15th Sept 2024</span>
					</div>
					<div class="flex flex-col gap-1">
						<span class="text-xs font-semibold uppercase text-muted-foreground">
							Job Classification
						</span>
						<span class="text-sm font-semibold">
							Pending Customer Authorisation
						</span>
					</div>
					<div class="flex flex-col gap-1">
						<span class="text-xs font-semibold uppercase text-muted-foreground">
							Order Required
						</span>
						<span class="text-sm font-semibold">Yes</span>
					</div>
					<div class="flex flex-col gap-1">
						<span class="text-xs font-semibold uppercase text-muted-foreground">
							Customer Order No
						</span>
						<span class="text-sm font-semibold">436621</span>
					</div>
					<div class="flex flex-col gap-1">
						<span class="text-xs font-semibold uppercase text-muted-foreground">
							Reported By
						</span>
						<span class="text-sm font-semibold">Mike Johnson</span>
					</div>
					<div class="flex flex-col gap-1">
						<span class="text-xs font-semibold uppercase text-muted-foreground">
							Call Booked With
						</span>
						<span class="text-sm font-semibold">Liam David</span>
					</div>

					<div class="flex flex-col gap-1">
						<span class="text-xs font-semibold uppercase text-muted-foreground">
							Service Call Booked
						</span>
						<span class="text-sm font-semibold leading-snug">
							15th Sept 2024
							<br />
							12:25 PM
						</span>
					</div>
					<div class="flex flex-col gap-1">
						<span class="text-xs font-semibold uppercase text-muted-foreground">
							Tech Support Response
						</span>
						<span class="text-sm font-semibold leading-snug">
							15th Sept 2024
							<br />
							14:45 PM
						</span>
					</div>
					<div class="flex flex-col gap-1">
						<span class="text-xs font-semibold uppercase text-muted-foreground">
							On Site Arrival
						</span>
						<span class="text-sm font-semibold leading-snug">
							16th Sept 2024
							<br />
							17:25 PM
						</span>
					</div>
					<div class="flex flex-col gap-1">
						<span class="text-xs font-semibold uppercase text-muted-foreground">
							On Site Departure
						</span>
						<span class="text-sm font-semibold leading-snug">
							16th Sept 2024
							<br />
							19:00 PM
						</span>
					</div>
					<div class="flex flex-col gap-1">
						<span class="text-xs font-semibold uppercase text-muted-foreground">
							Job Signed Off
						</span>
						<span class="text-sm font-semibold leading-snug">
							19th Sept 2024
							<br />
							11:00 PM
						</span>
					</div>
					<div class="flex flex-col gap-1">
						<span class="text-xs font-semibold uppercase text-muted-foreground">
							Engineer Assigned
						</span>
						<span class="text-sm font-semibold">Mike Johnson</span>
					</div>
				</div>

				<!-- Bottom layout: reported defects + spare parts -->
				<div class="grid gap-8 xl:grid-cols-2">
					<!-- Left column: reported defects & notes -->
					<div class="space-y-8 xl:col-span-1">
						<div class="space-y-2">
							<h3 class="text-sm font-semibold">Reported Defects</h3>
							<p class="text-sm text-muted-foreground leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
								varius, nunc at interdum porta, erat purus tincidunt arcu, nec
								convallis lorem justo a turpis. Donec eget facilisis tortor, vel
								aliquam odio. Integer vulputate sollicitudin eros, id
								pellentesque erat suscipit a.
							</p>
						</div>

						<div class="space-y-2">
							<h3 class="text-sm font-semibold">Notes</h3>
							<p class="text-sm text-muted-foreground leading-relaxed">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae
								vitae dicta sunt explicabo.
							</p>
						</div>
					</div>

					<!-- Right column: spare parts table -->
					<div class="space-y-3">
						<h3 class="text-sm font-semibold">Spare Parts</h3>
						<div class="border border-border rounded-lg">
							<div class="kt-card-table">
								<div class="kt-table-wrapper kt-scrollable">
									<table class="kt-table kt-table-border">
										<thead>
											<tr>
												<th class="w-[90px] text-center">
													<span class="kt-table-col">
														<span class="kt-table-col-label">Product ID</span>
														<span class="kt-table-col-sort"></span>
													</span>
												</th>
												<th class="min-w-[130px] text-center">
													<span class="kt-table-col">
														<span class="kt-table-col-label">Part No.</span>
														<span class="kt-table-col-sort"></span>
													</span>
												</th>
												<th class="min-w-[150px] text-center">
													<span class="kt-table-col">
														<span class="kt-table-col-label">
															Product Group
														</span>
														<span class="kt-table-col-sort"></span>
													</span>
												</th>
												<th class="min-w-[150px] text-center">
													<span class="kt-table-col">
														<span class="kt-table-col-label">
															Manufacturer
														</span>
														<span class="kt-table-col-sort"></span>
													</span>
												</th>
												<th class="min-w-[150px] text-center">
													<span class="kt-table-col">
														<span class="kt-table-col-label">Status</span>
														<span class="kt-table-col-sort"></span>
													</span>
												</th>
												<th class="w-[90px] text-center">
													<span class="kt-table-col">
														<span class="kt-table-col-label">History</span>
														<span class="kt-table-col-sort"></span>
													</span>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="text-center">1</td>
												<td class="text-center">LWB2203009</td>
												<td class="text-center">SPARE PART</td>
												<td class="text-center">ACUSON</td>
												<td class="text-center">Out on Visit</td>
												<td class="text-center">
													<button
														type="button"
														class="kt-btn kt-btn-icon kt-btn-xs kt-btn-ghost"
														data-kt-modal-toggle="#visit-history-modal">
														<i class="ki-filled ki-eye"></i>
													</button>
												</td>
											</tr>
											<tr>
												<td class="text-center">4</td>
												<td class="text-center">708021</td>
												<td class="text-center">CONSUMABLE</td>
												<td class="text-center">DURACELL</td>
												<td class="text-center">Installed on Site</td>
												<td class="text-center">
													<button
														type="button"
														class="kt-btn kt-btn-icon kt-btn-xs kt-btn-ghost"
														data-kt-modal-toggle="#visit-history-modal">
														<i class="ki-filled ki-eye"></i>
													</button>
												</td>
											</tr>
											<tr>
												<td class="text-center">5</td>
												<td class="text-center">Logiq E</td>
												<td class="text-center">SCANNER</td>
												<td class="text-center">GE</td>
												<td class="text-center">Returned to Stock</td>
												<td class="text-center">
													<button
														type="button"
														class="kt-btn kt-btn-icon kt-btn-xs kt-btn-ghost"
														data-kt-modal-toggle="#visit-history-modal">
														<i class="ki-filled ki-eye"></i>
													</button>
												</td>
											</tr>
											<tr>
												<td class="text-center">11</td>
												<td class="text-center">UP-21MD</td>
												<td class="text-center">COLOUR PRINTER</td>
												<td class="text-center">SONY</td>
												<td class="text-center">Out on Visit</td>
												<td class="text-center">
													<button
														type="button"
														class="kt-btn kt-btn-icon kt-btn-xs kt-btn-ghost"
														data-kt-modal-toggle="#visit-history-modal">
														<i class="ki-filled ki-eye"></i>
													</button>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Visit history modal -->
	<div
		class="kt-modal kt-modal-center"
		data-kt-modal="true"
		id="visit-history-modal">
		<div class="kt-modal-content max-w-[720px]">
			<div class="kt-modal-header">
				<h3 class="kt-modal-title">SSD-3500SX</h3>
				<button
					type="button"
					class="kt-modal-close"
					aria-label="Close modal"
					data-kt-modal-dismiss="#visit-history-modal">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-x"
						aria-hidden="true">
						<path d="M18 6 6 18"></path>
						<path d="m6 6 12 12"></path>
					</svg>
				</button>
			</div>
			<div class="kt-modal-body max-h-[400px]">
				<div class="kt-card-table">
					<div class="kt-table-wrapper">
						<table class="kt-table kt-table-border">
							<thead>
								<tr>
									<th class="min-w-[200px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label">Date & Time</span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[200px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label">Status</span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
									<th class="min-w-[200px] text-center">
										<span class="kt-table-col">
											<span class="kt-table-col-label">Updated By</span>
											<span class="kt-table-col-sort"></span>
										</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Out on Visit</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Installed on Site</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Out on Visit</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Installed on Site</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Out on Visit</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Installed on Site</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Out on Visit</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Installed on Site</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Out on Visit</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Installed on Site</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Out on Visit</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Installed on Site</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Out on Visit</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Installed on Site</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Out on Visit</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Installed on Site</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Out on Visit</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Installed on Site</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Out on Visit</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Installed on Site</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Out on Visit</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Installed on Site</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Out on Visit</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Installed on Site</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Out on Visit</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
								<tr>
									<td class="text-center">12th December 2024 11:00 AM</td>
									<td class="text-center">Installed on Site</td>
									<td class="text-center">Mike Johnson</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const visitId = computed(() => route.params.id as string);
</script>
