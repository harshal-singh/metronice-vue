<template>
	<div class="grid gap-5 lg:gap-7.5">
		<!-- Header -->
		<div
			class="kt-card-header flex-wrap gap-4 items-center justify-between px-0">
			<h2 class="text-xl font-semibold">Stock In/ Edit Stock</h2>

			<RouterLink
				to="/stocks"
				class="kt-btn kt-btn-light flex items-center gap-1">
				<i class="ki-outline ki-arrow-left"></i>
				<span>Back to Stocks</span>
			</RouterLink>
		</div>

		<!-- Main Form -->
		<div class="kt-card kt-card-grid min-w-full border-0 shadow-none">
			<div class="kt-card-content">
				<form @submit.prevent="handleSubmit" class="space-y-6">
					<!-- Part Identification and Origin Section -->
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						<!-- Part Number -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">
								Part Number <span class="text-red-500">*</span>
							</label>
							<div class="flex gap-2">
								<div class="flex-1">
									<select
										v-model="formData.partNumber"
										data-kt-select="true"
										class="kt-select"
										@blur="touchField('partNumber')"
										@change="validateField('partNumber')">
										<option value="">Select Part Number</option>
										<option
											v-for="part in partNumbers"
											:key="part.id"
											:value="part.id">
											{{ part.number }}
										</option>
									</select>
								</div>
								<button
									type="button"
									class="kt-btn kt-btn-icon kt-btn-light"
									data-kt-modal-toggle="#request-part-modal">
									<i class="ki-outline ki-plus"></i>
								</button>
							</div>
							<div
								v-if="errors.partNumber && touched.partNumber"
								class="text-xs text-red-600 mt-1">
								{{ errors.partNumber }}
							</div>
						</div>

						<!-- Part Type -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">
								Part type <span class="text-red-500">*</span>
							</label>
							<select
								v-model="formData.partType"
								data-kt-select="true"
								class="kt-select"
								@blur="touchField('partType')"
								@change="onPartTypeChange">
								<option value="">Select Part Type</option>
								<option value="whole-item">Whole Item</option>
								<option value="harvested">Harvested</option>
								<option value="accessory">Accessory</option>
							</select>
							<div
								v-if="errors.partType && touched.partType"
								class="text-xs text-red-600 mt-1">
								{{ errors.partType }}
							</div>
						</div>

						<!-- Parent Product -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">
								Parent product
								<span v-if="isParentProductRequired" class="text-red-500"
									>*</span
								>
							</label>
							<select
								v-model="formData.parentProduct"
								data-kt-select="true"
								class="kt-select"
								:disabled="!isParentProductRequired"
								@blur="touchField('parentProduct')"
								@change="validateField('parentProduct')">
								<option value="">Select Parent Product</option>
								<option
									v-for="product in parentProducts"
									:key="product.id"
									:value="product.id">
									{{ product.name }}
								</option>
							</select>
							<div
								v-if="errors.parentProduct && touched.parentProduct"
								class="text-xs text-red-600 mt-1">
								{{ errors.parentProduct }}
							</div>
						</div>

						<!-- Origin -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">
								Origin <span class="text-red-500">*</span>
							</label>
							<select
								v-model="formData.origin"
								data-kt-select="true"
								class="kt-select"
								@blur="touchField('origin')"
								@change="validateField('origin')">
								<option value="">Select Origin</option>
								<option
									v-for="origin in origins"
									:key="origin.id"
									:value="origin.id">
									{{ origin.name }}
								</option>
							</select>
							<div
								v-if="errors.origin && touched.origin"
								class="text-xs text-red-600 mt-1">
								{{ errors.origin }}
							</div>
						</div>
					</div>

					<!-- GRN Section -->
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<!-- GRN -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">
								GRN
								<span v-if="isGRNRequired" class="text-red-500">*</span>
							</label>
							<input
								v-model="formData.grn"
								type="text"
								class="kt-input"
								:disabled="!isGRNRequired"
								placeholder="Enter GRN"
								@blur="touchField('grn')"
								@input="validateField('grn')" />
							<div
								v-if="errors.grn && touched.grn"
								class="text-xs text-red-600 mt-1">
								{{ errors.grn }}
							</div>
							<div
								v-if="!isGRNRequired"
								class="text-xs text-muted-foreground mt-1">
								GRN is applicable only to whole item or accessory and not to
								harvested part.
							</div>
						</div>

						<!-- Manufacturer -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">
								Manufacturer <span class="text-red-500">*</span>
							</label>
							<select
								v-model="formData.manufacturer"
								data-kt-select="true"
								class="kt-select"
								@blur="touchField('manufacturer')"
								@change="validateField('manufacturer')">
								<option value="">Select Manufacturer</option>
								<option
									v-for="manufacturer in manufacturers"
									:key="manufacturer.id"
									:value="manufacturer.id">
									{{ manufacturer.name }}
								</option>
							</select>
							<div
								v-if="errors.manufacturer && touched.manufacturer"
								class="text-xs text-red-600 mt-1">
								{{ errors.manufacturer }}
							</div>
						</div>

						<!-- Date of Manufacture -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">Date of Manufacture</label>
							<div class="kt-input">
								<i class="ki-filled ki-calendar"> </i>
								<input
									class="grow"
									v-model="formData.dateOfManufacture"
									data-kt-date-picker="true"
									data-kt-date-picker-format="dd MMM yyyy"
									data-kt-date-picker-input-mode="true"
									data-kt-date-picker-position-to-input="left"
									id="date-of-manufacture-date-picker"
									placeholder="Select Date of Manufacture"
									type="text"
									@blur="touchField('dateOfManufacture')" />
							</div>
						</div>
					</div>

					<!-- Product Details Section -->
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<!-- Product Group -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">
								Product Group <span class="text-red-500">*</span>
							</label>
							<select
								v-model="formData.productGroup"
								data-kt-select="true"
								class="kt-select"
								@blur="touchField('productGroup')"
								@change="validateField('productGroup')">
								<option value="">Select Product Group</option>
								<option
									v-for="group in productGroups"
									:key="group.id"
									:value="group.id">
									{{ group.name }}
								</option>
							</select>
							<div
								v-if="errors.productGroup && touched.productGroup"
								class="text-xs text-red-600 mt-1">
								{{ errors.productGroup }}
							</div>
						</div>

						<!-- OEM Serial Number -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">OEM Serial Number</label>
							<input
								v-model="formData.oemSerialNumber"
								type="text"
								class="kt-input"
								placeholder="Enter OEM Serial Number"
								@blur="touchField('oemSerialNumber')" />
						</div>
					</div>

					<!-- Software and System Section -->
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<!-- Software Revision -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">Software Revision</label>
							<input
								v-model="formData.softwareRevision"
								type="text"
								class="kt-input"
								placeholder="Enter Software Revision"
								@blur="touchField('softwareRevision')" />
						</div>

						<!-- System -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">System</label>
							<input
								v-model="formData.system"
								type="text"
								class="kt-input"
								placeholder="Enter System"
								@blur="touchField('system')" />
						</div>

						<!-- Order Number -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">Order Number</label>
							<input
								v-model="formData.orderNumber"
								type="text"
								class="kt-input"
								placeholder="Enter Order Number"
								@blur="touchField('orderNumber')" />
						</div>
					</div>

					<!-- Status and Location Section -->
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<!-- Status -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">
								Status <span class="text-red-500">*</span>
							</label>
							<select
								v-model="formData.status"
								data-kt-select="true"
								class="kt-select"
								@blur="touchField('status')"
								@change="validateField('status')">
								<option value="">Select Status</option>
								<option
									v-for="status in statuses"
									:key="status.id"
									:value="status.id">
									{{ status.name }}
								</option>
							</select>
							<div
								v-if="errors.status && touched.status"
								class="text-xs text-red-600 mt-1">
								{{ errors.status }}
							</div>
						</div>

						<!-- Sale Status -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">
								Sale Status <span class="text-red-500">*</span>
							</label>
							<select
								v-model="formData.saleStatus"
								data-kt-select="true"
								class="kt-select"
								@blur="touchField('saleStatus')"
								@change="validateField('saleStatus')">
								<option value="">Select Sale Status</option>
								<option
									v-for="saleStatus in saleStatuses"
									:key="saleStatus.id"
									:value="saleStatus.id">
									{{ saleStatus.name }}
								</option>
							</select>
							<div
								v-if="errors.saleStatus && touched.saleStatus"
								class="text-xs text-red-600 mt-1">
								{{ errors.saleStatus }}
							</div>
						</div>

						<!-- Stock Location -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">
								Stock Location <span class="text-red-500">*</span>
							</label>
							<input
								v-model="formData.stockLocation"
								type="text"
								class="kt-input"
								placeholder="Enter Stock Location"
								@blur="touchField('stockLocation')"
								@input="validateField('stockLocation')" />
							<div
								v-if="errors.stockLocation && touched.stockLocation"
								class="text-xs text-red-600 mt-1">
								{{ errors.stockLocation }}
							</div>
						</div>
					</div>

					<!-- Condition and Processing Details Section -->
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<!-- Tested -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">Tested</label>
							<input
								v-model="formData.tested"
								type="text"
								class="kt-input"
								placeholder="Enter Tested"
								@blur="touchField('tested')" />
						</div>

						<!-- Configuration -->
						<div class="flex flex-col gap-2 col-span-2">
							<label class="kt-form-label">Configuration</label>
							<textarea
								v-model="formData.configuration"
								class="kt-textarea"
								rows="3"
								placeholder="Enter Configuration"
								@blur="touchField('configuration')"></textarea>
						</div>

						<!-- Tested By -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">Tested By</label>
							<input
								v-model="formData.testedBy"
								type="text"
								class="kt-input"
								placeholder="Enter Tested By"
								@blur="touchField('testedBy')" />
						</div>

						<!-- Notes -->
						<div class="flex flex-col gap-2 col-span-2">
							<label class="kt-form-label">Notes</label>
							<textarea
								v-model="formData.notes"
								class="kt-textarea"
								rows="3"
								placeholder="Enter Notes"
								@blur="touchField('notes')"></textarea>
						</div>

						<!-- Stripped By -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">Stripped By</label>
							<input
								v-model="formData.strippedBy"
								type="text"
								class="kt-input"
								placeholder="Enter Stripped By"
								@blur="touchField('strippedBy')" />
						</div>

						<!-- Defects -->
						<div class="flex flex-col gap-2 col-span-2">
							<label class="kt-form-label">Defects</label>
							<textarea
								v-model="formData.defects"
								class="kt-textarea"
								rows="3"
								placeholder="Enter Defects"
								@blur="touchField('defects')"></textarea>
						</div>

						<!-- Cleaned By -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">Cleaned By</label>
							<input
								v-model="formData.cleanedBy"
								type="text"
								class="kt-input"
								placeholder="Enter Cleaned By"
								@blur="touchField('cleanedBy')" />
						</div>

						<!-- Repairs -->
						<div class="flex flex-col gap-2 col-span-2">
							<label class="kt-form-label">Repairs</label>
							<textarea
								v-model="formData.repairs"
								class="kt-textarea"
								rows="3"
								placeholder="Enter Repairs"
								@blur="touchField('repairs')"></textarea>
						</div>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<!-- Packed By -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">Packed By</label>
							<input
								v-model="formData.packedBy"
								type="text"
								class="kt-input"
								placeholder="Enter Packed By"
								@blur="touchField('packedBy')" />
						</div>

						<!-- Arrived On -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">Arrived On</label>
							<div class="kt-input">
								<i class="ki-filled ki-calendar"> </i>
								<input
									class="grow"
									v-model="formData.arrivedOn"
									data-kt-date-picker="true"
									data-kt-date-picker-format="dd MMM yyyy"
									data-kt-date-picker-input-mode="true"
									data-kt-date-picker-position-to-input="left"
									id="arrived-on-date-picker"
									placeholder="Select Arrived On"
									type="text"
									@blur="touchField('arrivedOn')" />
							</div>
						</div>
					</div>

					<!-- Financial Values Section -->
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<!-- Original Cost Price -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">Original Cost Price</label>
							<div class="kt-input">
								<span class="text-muted-foreground">£</span>
								<input
									v-model.number="formData.originalCostPrice"
									type="number"
									step="0.01"
									class="kt-input"
									placeholder="0.00"
									@blur="touchField('originalCostPrice')" />
							</div>
						</div>

						<!-- Current Value -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">Current Value</label>
							<div class="kt-input">
								<span class="text-muted-foreground">£</span>
								<input
									v-model.number="formData.currentValue"
									type="number"
									step="0.01"
									class="kt-input"
									placeholder="0.00"
									@blur="touchField('currentValue')" />
							</div>
						</div>

						<!-- Market Value -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">Market Value</label>
							<div class="kt-input">
								<span class="text-muted-foreground">£</span>
								<input
									v-model.number="formData.marketValue"
									type="number"
									step="0.01"
									class="kt-input"
									placeholder="0.00"
									@blur="touchField('marketValue')" />
							</div>
						</div>

						<!-- Sold At (Edit mode only) -->
						<div v-if="isEditMode" class="flex flex-col gap-2">
							<label class="kt-form-label">Sold At</label>
							<div class="kt-input">
								<span class="text-muted-foreground">£</span>
								<input
									v-model.number="formData.soldAt"
									type="number"
									step="0.01"
									class="kt-input"
									placeholder="0.00"
									@blur="touchField('soldAt')" />
							</div>
						</div>
					</div>

					<!-- Image Upload Section -->
					<div class="flex flex-col gap-4">
						<label class="kt-form-label">Upload Part Images</label>
						<div class="flex items-center gap-4 max-w-fit">
							<!-- Upload Button -->
							<label
								class="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
								<input
									type="file"
									multiple
									accept="image/*"
									class="hidden"
									@change="handleImageUpload" />
								<i
									class="ki-filled ki-picture text-3xl text-muted-foreground mb-2"></i>
								<span class="text-sm text-muted-foreground text-center px-2">
									Upload Part Images
								</span>
							</label>

							<!-- Image Preview Carousel -->
							<div
								v-if="uploadedImages.length > 0"
								class="flex items-center gap-2 flex-1">
								<button
									type="button"
									class="kt-btn kt-btn-icon kt-btn-light"
									:disabled="imageCarouselIndex === 0"
									@click="previousImage">
									<i class="ki-outline ki-left"></i>
								</button>

								<div class="flex gap-2 overflow-x-auto flex-1">
									<div
										v-for="(image, index) in displayedImages"
										:key="index"
										class="flex-shrink-0 w-32 h-32 border border-border rounded-lg overflow-hidden bg-muted relative">
										<img
											:src="image.url"
											:alt="`Image ${index + 1}`"
											class="w-full h-full object-cover" />
										<button
											type="button"
											class="absolute top-1 right-1 kt-btn kt-btn-xs kt-btn-icon kt-btn-danger"
											@click="removeImage(image.id)">
											<i class="ki-outline ki-cross"></i>
										</button>
									</div>
								</div>

								<button
									type="button"
									class="kt-btn kt-btn-icon kt-btn-light"
									:disabled="imageCarouselIndex + 3 >= uploadedImages.length"
									@click="nextImage">
									<i class="ki-outline ki-right"></i>
								</button>
							</div>

							<!-- Upload Status -->
							<div
								v-if="uploadedImages.length > 0"
								class="flex items-center gap-2 text-sm text-success">
								<i class="ki-outline ki-check-circle"></i>
								<span>{{ uploadedImages.length }} Image(s) Uploaded</span>
							</div>
						</div>
					</div>

					<!-- Error Message -->
					<div
						v-if="errors.submit"
						class="p-4 bg-red-50 border border-red-200 rounded-md">
						<p class="text-sm text-red-600">{{ errors.submit }}</p>
					</div>

					<!-- Action Buttons -->
					<div class="flex justify-end gap-4 pt-4 border-t border-border">
						<RouterLink to="/stocks" class="kt-btn kt-btn-light">
							CANCEL
						</RouterLink>
						<button
							type="submit"
							class="kt-btn kt-btn-primary"
							:disabled="isLoading">
							{{ isLoading ? 'Saving...' : 'SAVE' }}
						</button>
					</div>
				</form>
			</div>
		</div>

		<!-- Request New Part Number Modal -->
		<div
			class="kt-modal kt-modal-center"
			data-kt-modal="true"
			id="request-part-modal">
			<div class="kt-modal-content max-w-[720px]">
				<div class="kt-modal-header">
					<h3 class="text-lg font-semibold">Request New Part Number</h3>
					<button
						type="button"
						class="kt-modal-close"
						aria-label="Close modal"
						data-kt-modal-dismiss="#request-part-modal">
						<i class="ki-filled ki-cross"></i>
					</button>
				</div>

				<div class="kt-modal-body">
					<!-- Error Dialog -->
					<div
						v-if="partNumberError"
						class="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3">
						<i class="ki-outline ki-information text-red-600 text-xl"></i>
						<div class="flex-1">
							<p class="text-sm font-semibold text-red-600 mb-1">
								Part Number Already Exists
							</p>
							<p class="text-sm text-red-600">
								The newly entered Part Number already exists in the Master.
								Please provide unique Part Number.
							</p>
							<button
								type="button"
								class="kt-btn kt-btn-sm kt-btn-primary mt-3"
								@click="partNumberError = ''">
								OKAY
							</button>
						</div>
					</div>

					<form @submit.prevent="handleRequestPartNumber" class="space-y-4">
						<!-- New Part Number -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label">
								New Part Number <span class="text-red-500">*</span>
							</label>
							<input
								v-model="newPartNumberForm.partNumber"
								type="text"
								class="kt-input"
								:class="{
									'border-red-500':
										newPartNumberErrors.partNumber &&
										newPartNumberTouched.partNumber,
								}"
								placeholder="Enter New Part Number"
								@blur="touchNewPartField('partNumber')"
								@input="validateNewPartField('partNumber')" />
							<div
								v-if="
									newPartNumberErrors.partNumber &&
									newPartNumberTouched.partNumber
								"
								class="text-xs text-red-600 mt-1">
								{{ newPartNumberErrors.partNumber }}
							</div>
						</div>

						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<!-- Product Group -->
							<div class="flex flex-col gap-2">
								<label class="kt-form-label">
									Product Group <span class="text-red-500">*</span>
								</label>
								<select
									v-model="newPartNumberForm.productGroup"
									data-kt-select="true"
									class="kt-select"
									:class="{
										'border-red-500':
											newPartNumberErrors.productGroup &&
											newPartNumberTouched.productGroup,
									}"
									@blur="touchNewPartField('productGroup')"
									@change="validateNewPartField('productGroup')">
									<option value="">Select Product Group</option>
									<option
										v-for="group in productGroups"
										:key="group.id"
										:value="group.id">
										{{ group.name }}
									</option>
								</select>
								<div
									v-if="
										newPartNumberErrors.productGroup &&
										newPartNumberTouched.productGroup
									"
									class="text-xs text-red-600 mt-1">
									{{ newPartNumberErrors.productGroup }}
								</div>
							</div>

							<!-- Manufacturer -->
							<div class="flex flex-col gap-2">
								<label class="kt-form-label">
									Manufacturer <span class="text-red-500">*</span>
								</label>
								<select
									v-model="newPartNumberForm.manufacturer"
									data-kt-select="true"
									class="kt-select"
									@blur="touchNewPartField('manufacturer')"
									@change="validateNewPartField('manufacturer')">
									<option value="">Select Manufacturer</option>
									<option
										v-for="manufacturer in manufacturers"
										:key="manufacturer.id"
										:value="manufacturer.id">
										{{ manufacturer.name }}
									</option>
								</select>
								<div
									v-if="
										newPartNumberErrors.manufacturer &&
										newPartNumberTouched.manufacturer
									"
									class="text-xs text-red-600 mt-1">
									{{ newPartNumberErrors.manufacturer }}
								</div>
							</div>
						</div>

						<!-- Image Upload for New Part -->
						<div class="flex flex-col gap-4">
							<label class="kt-form-label">Upload Part Images</label>
							<div class="flex items-center gap-4 max-w-fit">
								<label
									class="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
									<input
										type="file"
										multiple
										accept="image/*"
										class="hidden"
										@change="handleNewPartImageUpload" />
									<i
										class="ki-filled ki-picture text-muted-foreground text-3xl mb-2"></i>
									<span class="text-sm text-muted-foreground text-center px-2">
										Upload Part Images
									</span>
								</label>

								<div
									v-if="newPartImages.length > 0"
									class="flex items-center gap-2 flex-1">
									<button
										type="button"
										class="kt-btn kt-btn-icon kt-btn-light"
										:disabled="newPartImageIndex === 0"
										@click="previousNewPartImage">
										<i class="ki-outline ki-left"></i>
									</button>

									<div class="flex gap-2 overflow-x-auto flex-1">
										<div
											v-for="(image, index) in displayedNewPartImages"
											:key="index"
											class="flex-shrink-0 w-32 h-32 border border-border rounded-lg overflow-hidden bg-muted relative">
											<img
												:src="image.url"
												:alt="`Image ${index + 1}`"
												class="w-full h-full object-cover" />
											<button
												type="button"
												class="absolute top-1 right-1 kt-btn kt-btn-xs kt-btn-icon kt-btn-danger"
												@click="removeNewPartImage(image.id)">
												<i class="ki-outline ki-cross"></i>
											</button>
										</div>
									</div>

									<button
										type="button"
										class="kt-btn kt-btn-icon kt-btn-light"
										:disabled="
											newPartImageIndex + numberOfImagesToDisplay >=
											newPartImages.length
										"
										@click="nextNewPartImage">
										<i class="ki-outline ki-right"></i>
									</button>
								</div>
							</div>
							<div
								v-if="newPartImages.length > 0"
								class="flex items-center gap-2 text-sm text-success">
								<i class="ki-outline ki-check-circle"></i>
								<span>{{ newPartImages.length }} Image(s) Uploaded</span>
							</div>
						</div>

						<!-- Action Buttons -->
						<div class="flex justify-end gap-4 pt-4 border-t border-border">
							<button
								type="button"
								class="kt-btn kt-btn-light"
								data-kt-modal-dismiss="true">
								CANCEL
							</button>
							<button
								type="submit"
								class="kt-btn kt-btn-primary"
								:disabled="isRequestingPart">
								{{ isRequestingPart ? 'Requesting...' : 'REQUEST & ADD' }}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Check if edit mode
const isEditMode = computed(() => !!route.params.id);

// Form Data
const formData = reactive({
	partNumber: '',
	partType: '',
	parentProduct: '',
	origin: '',
	grn: '',
	manufacturer: '',
	dateOfManufacture: '',
	productGroup: '',
	oemSerialNumber: '',
	orderNumber: '',
	softwareRevision: '',
	system: '',
	status: '',
	saleStatus: '',
	stockLocation: '',
	tested: '',
	configuration: '',
	testedBy: '',
	notes: '',
	strippedBy: '',
	defects: '',
	cleanedBy: '',
	repairs: '',
	packedBy: '',
	arrivedOn: '',
	originalCostPrice: null as number | null,
	currentValue: null as number | null,
	marketValue: null as number | null,
	soldAt: null as number | null,
});

// Validation
const touched = reactive({
	partNumber: false,
	partType: false,
	parentProduct: false,
	origin: false,
	grn: false,
	manufacturer: false,
	productGroup: false,
	status: false,
	saleStatus: false,
	stockLocation: false,
	dateOfManufacture: false,
	oemSerialNumber: false,
	orderNumber: false,
	softwareRevision: false,
	system: false,
	tested: false,
	configuration: false,
	testedBy: false,
	notes: false,
	strippedBy: false,
	defects: false,
	cleanedBy: false,
	repairs: false,
	packedBy: false,
	arrivedOn: false,
	originalCostPrice: false,
	currentValue: false,
	marketValue: false,
	soldAt: false,
});

const errors = reactive({
	partNumber: '',
	partType: '',
	parentProduct: '',
	origin: '',
	grn: '',
	manufacturer: '',
	productGroup: '',
	status: '',
	saleStatus: '',
	stockLocation: '',
	submit: '',
});

// Computed properties for conditional validation
const isParentProductRequired = computed(() => {
	return formData.partType === 'harvested' || formData.partType === 'accessory';
});

const isGRNRequired = computed(() => {
	return (
		formData.partType === 'whole-item' || formData.partType === 'accessory'
	);
});

// Image upload
interface ImageFile {
	id: string;
	url: string;
	file: File;
}

const uploadedImages = ref<ImageFile[]>([]);
const numberOfImagesToDisplay = 3;
const imageCarouselIndex = ref(0);
const displayedImages = computed(() => {
	return uploadedImages.value.slice(
		imageCarouselIndex.value,
		imageCarouselIndex.value + numberOfImagesToDisplay,
	);
});

// Request New Part Number Modal
const partNumberError = ref('');
const isRequestingPart = ref(false);

const newPartNumberForm = reactive({
	partNumber: '',
	productGroup: '',
	manufacturer: '',
});

const newPartNumberTouched = reactive({
	partNumber: false,
	productGroup: false,
	manufacturer: false,
});

const newPartNumberErrors = reactive({
	partNumber: '',
	productGroup: '',
	manufacturer: '',
});

const newPartImages = ref<ImageFile[]>([]);
const newPartImageIndex = ref(0);
const displayedNewPartImages = computed(() => {
	return newPartImages.value.slice(
		newPartImageIndex.value,
		newPartImageIndex.value + numberOfImagesToDisplay,
	);
});

// Loading state
const isLoading = ref(false);

// Mock data - Replace with actual API calls
const partNumbers = ref([
	{ id: '1', number: 'PN-001' },
	{ id: '2', number: 'PN-002' },
	{ id: '3', number: 'PN-003' },
]);

const parentProducts = ref([
	{ id: '1', name: 'Parent Product 1' },
	{ id: '2', name: 'Parent Product 2' },
	{ id: '3', name: 'Parent Product 3' },
]);

const origins = ref([
	{ id: '1', name: 'St Marry Hospital' },
	{ id: '2', name: 'Origin 2' },
	{ id: '3', name: 'Origin 3' },
]);

const manufacturers = ref([
	{ id: '1', name: 'ALOKA' },
	{ id: '2', name: 'AMARON' },
	{ id: '3', name: 'ACUSON' },
	{ id: '4', name: 'SONY' },
	{ id: '5', name: 'APPLE' },
]);

const productGroups = ref([
	{ id: '1', name: 'SCANNER' },
	{ id: '2', name: 'PROBE' },
	{ id: '3', name: 'CONSUMABLE' },
	{ id: '4', name: 'COLOUR PRINTER' },
	{ id: '5', name: 'COMPUTER' },
]);

const statuses = ref([
	{ id: '1', name: 'Used' },
	{ id: '2', name: 'New' },
	{ id: '3', name: 'Not tested' },
]);

const saleStatuses = ref([
	{ id: '1', name: 'Quarantine' },
	{ id: '2', name: 'Used' },
	{ id: '3', name: 'Refurbished' },
	{ id: '4', name: 'Repaired' },
	{ id: '5', name: 'New' },
]);

// Validation functions
const touchField = (field: keyof typeof touched) => {
	touched[field] = true;
	validateField(field);
};

const validateField = (field: keyof typeof errors) => {
	switch (field) {
		case 'partNumber':
			if (!formData.partNumber) {
				errors.partNumber = 'Part Number is required';
			} else {
				errors.partNumber = '';
			}
			break;
		case 'partType':
			if (!formData.partType) {
				errors.partType = 'Part Type is required';
			} else {
				errors.partType = '';
				// Re-validate parent product when part type changes
				if (touched.parentProduct) {
					validateField('parentProduct');
				}
				// Re-validate GRN when part type changes
				if (touched.grn) {
					validateField('grn');
				}
			}
			break;
		case 'parentProduct':
			if (isParentProductRequired.value && !formData.parentProduct) {
				errors.parentProduct = 'Parent Product is required for this part type';
			} else {
				errors.parentProduct = '';
			}
			break;
		case 'origin':
			if (!formData.origin) {
				errors.origin = 'Origin is required';
			} else {
				errors.origin = '';
			}
			break;
		case 'grn':
			if (isGRNRequired.value && !formData.grn) {
				errors.grn = 'GRN is required for this part type';
			} else {
				errors.grn = '';
			}
			break;
		case 'manufacturer':
			if (!formData.manufacturer) {
				errors.manufacturer = 'Manufacturer is required';
			} else {
				errors.manufacturer = '';
			}
			break;
		case 'productGroup':
			if (!formData.productGroup) {
				errors.productGroup = 'Product Group is required';
			} else {
				errors.productGroup = '';
			}
			break;
		case 'status':
			if (!formData.status) {
				errors.status = 'Status is required';
			} else {
				errors.status = '';
			}
			break;
		case 'saleStatus':
			if (!formData.saleStatus) {
				errors.saleStatus = 'Sale Status is required';
			} else {
				errors.saleStatus = '';
			}
			break;
		case 'stockLocation':
			if (!formData.stockLocation) {
				errors.stockLocation = 'Stock Location is required';
			} else {
				errors.stockLocation = '';
			}
			break;
	}
};

const validateForm = () => {
	let isValid = true;

	// Validate all required fields
	validateField('partNumber');
	validateField('partType');
	validateField('parentProduct');
	validateField('origin');
	validateField('grn');
	validateField('manufacturer');
	validateField('productGroup');
	validateField('status');
	validateField('saleStatus');
	validateField('stockLocation');

	// Check if any errors exist
	for (const key in errors) {
		if (errors[key as keyof typeof errors]) {
			isValid = false;
			break;
		}
	}

	return isValid;
};

const onPartTypeChange = () => {
	validateField('partType');
	// Clear parent product if not required
	if (!isParentProductRequired.value) {
		formData.parentProduct = '';
		errors.parentProduct = '';
	}
	// Clear GRN if not required
	if (!isGRNRequired.value) {
		formData.grn = '';
		errors.grn = '';
	}
};

// Image upload handlers
const handleImageUpload = (event: Event) => {
	const target = event.target as HTMLInputElement;
	if (target.files) {
		Array.from(target.files).forEach((file) => {
			const reader = new FileReader();
			reader.onload = (e) => {
				const image: ImageFile = {
					id: Date.now().toString() + Math.random().toString(),
					url: e.target?.result as string,
					file: file,
				};
				uploadedImages.value.push(image);
			};
			reader.readAsDataURL(file);
		});
	}
};

const removeImage = (id: string) => {
	uploadedImages.value = uploadedImages.value.filter((img) => img.id !== id);
	if (imageCarouselIndex.value >= uploadedImages.value.length) {
		imageCarouselIndex.value = Math.max(
			0,
			uploadedImages.value.length - numberOfImagesToDisplay,
		);
	}
};

const previousImage = () => {
	if (imageCarouselIndex.value > 0) {
		imageCarouselIndex.value--;
	}
};

const nextImage = () => {
	if (
		imageCarouselIndex.value + numberOfImagesToDisplay <
		uploadedImages.value.length
	) {
		imageCarouselIndex.value++;
	}
};

// New Part Number handlers
const touchNewPartField = (field: keyof typeof newPartNumberTouched) => {
	newPartNumberTouched[field] = true;
	validateNewPartField(field);
};

const validateNewPartField = (field: keyof typeof newPartNumberErrors) => {
	switch (field) {
		case 'partNumber':
			if (!newPartNumberForm.partNumber.trim()) {
				newPartNumberErrors.partNumber = 'Part Number is required';
			} else {
				newPartNumberErrors.partNumber = '';
			}
			break;
		case 'productGroup':
			if (!newPartNumberForm.productGroup) {
				newPartNumberErrors.productGroup = 'Product Group is required';
			} else {
				newPartNumberErrors.productGroup = '';
			}
			break;
		case 'manufacturer':
			if (!newPartNumberForm.manufacturer) {
				newPartNumberErrors.manufacturer = 'Manufacturer is required';
			} else {
				newPartNumberErrors.manufacturer = '';
			}
			break;
	}
};

const validateNewPartForm = () => {
	let isValid = true;
	validateNewPartField('partNumber');
	validateNewPartField('productGroup');
	validateNewPartField('manufacturer');

	for (const key in newPartNumberErrors) {
		if (newPartNumberErrors[key as keyof typeof newPartNumberErrors]) {
			isValid = false;
			break;
		}
	}

	return isValid;
};

const handleRequestPartNumber = async () => {
	// Touch all fields
	newPartNumberTouched.partNumber = true;
	newPartNumberTouched.productGroup = true;
	newPartNumberTouched.manufacturer = true;

	if (!validateNewPartForm()) {
		return;
	}

	isRequestingPart.value = true;
	partNumberError.value = '';

	try {
		// Simulate API call to check if part number exists
		await new Promise((resolve) => setTimeout(resolve, 500));

		// Mock: Check if part number already exists
		const exists = partNumbers.value.some(
			(pn) =>
				pn.number.toLowerCase() ===
				newPartNumberForm.partNumber.trim().toLowerCase(),
		);

		if (exists) {
			partNumberError.value = 'exists';
			isRequestingPart.value = false;
			return;
		}

		// Add new part number
		const newPart = {
			id: (partNumbers.value.length + 1).toString(),
			number: newPartNumberForm.partNumber.trim(),
		};
		partNumbers.value.push(newPart);

		// Set the new part number in the main form
		formData.partNumber = newPart.id;

		// Reset form
		newPartNumberForm.partNumber = '';
		newPartNumberForm.productGroup = '';
		newPartNumberForm.manufacturer = '';
		newPartImages.value = [];
		Object.keys(newPartNumberTouched).forEach(
			(key) =>
				(newPartNumberTouched[key as keyof typeof newPartNumberTouched] =
					false),
		);
		Object.keys(newPartNumberErrors).forEach(
			(key) =>
				(newPartNumberErrors[key as keyof typeof newPartNumberErrors] = ''),
		);
	} catch (error) {
		partNumberError.value = 'An error occurred. Please try again.';
	} finally {
		isRequestingPart.value = false;
	}
};

const handleNewPartImageUpload = (event: Event) => {
	const target = event.target as HTMLInputElement;
	if (target.files) {
		Array.from(target.files).forEach((file) => {
			const reader = new FileReader();
			reader.onload = (e) => {
				const image: ImageFile = {
					id: Date.now().toString() + Math.random().toString(),
					url: e.target?.result as string,
					file: file,
				};
				newPartImages.value.push(image);
			};
			reader.readAsDataURL(file);
		});
	}
};

const removeNewPartImage = (id: string) => {
	newPartImages.value = newPartImages.value.filter((img) => img.id !== id);
	if (newPartImageIndex.value >= newPartImages.value.length) {
		newPartImageIndex.value = Math.max(
			0,
			newPartImages.value.length - numberOfImagesToDisplay,
		);
	}
};

const previousNewPartImage = () => {
	if (newPartImageIndex.value > 0) {
		newPartImageIndex.value--;
	}
};

const nextNewPartImage = () => {
	if (
		newPartImageIndex.value + numberOfImagesToDisplay <
		newPartImages.value.length
	) {
		newPartImageIndex.value++;
	}
};

// Form submission
const handleSubmit = async () => {
	// Touch all required fields
	Object.keys(touched).forEach(
		(key) => (touched[key as keyof typeof touched] = true),
	);

	if (!validateForm()) {
		errors.submit = 'Please fill in all required fields correctly.';
		return;
	}

	isLoading.value = true;
	errors.submit = '';

	try {
		// Prepare form data with images
		const submitData = {
			...formData,
			images: uploadedImages.value.map((img) => img.file),
		};

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// TODO: Replace with actual API call
		console.log('Submitting stock data:', submitData);

		// Redirect to stocks list
		router.push('/stocks');
	} catch (error) {
		errors.submit = 'Failed to save stock. Please try again.';
	} finally {
		isLoading.value = false;
	}
};

// Load data if in edit mode
onMounted(() => {
	if (isEditMode.value) {
		// TODO: Load stock data from API
		// For now, just set some default values for testing
		console.log('Loading stock data for ID:', route.params.id);
	}
});
</script>
