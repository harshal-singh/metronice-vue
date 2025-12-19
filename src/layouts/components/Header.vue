<template>
	<!-- Header -->
	<header
		class="kt-header fixed top-0 z-10 start-0 end-0 flex items-stretch shrink-0 bg-background"
		data-kt-sticky="true"
		data-kt-sticky-class="border-b border-border"
		data-kt-sticky-name="header"
		id="header">
		<!-- Container -->
		<div
			class="kt-container-fixed flex justify-between items-stretch lg:gap-4"
			id="headerContainer">
			<!-- Mobile Logo -->
			<div class="flex gap-2.5 lg:hidden items-center -ms-1">
				<RouterLink class="shrink-0" to="/stocks">
					<img class="max-h-[25px] w-full" src="/media/app/mini-logo.svg" />
				</RouterLink>
				<div class="flex items-center">
					<button
						class="kt-btn kt-btn-icon kt-btn-ghost"
						data-kt-drawer-toggle="#sidebar">
						<i class="ki-filled ki-menu"> </i>
					</button>
				</div>
			</div>
			<!-- End of Mobile Logo -->

			<div
				class="kt-sidebar-header hidden lg:flex items-center relative justify-between shrink-0"
				id="sidebar_header">
				<a class="dark:hidden" href="/">
					<img
						class="default-logo min-h-[22px] max-w-none"
						src="/media/app/default-logo.svg" />
					<!-- <img
						class="small-logo min-h-[22px] max-w-none"
						src="/media/app/mini-logo.svg" /> -->
				</a>
				<a class="hidden dark:block" href="/">
					<img
						class="default-logo min-h-[22px] max-w-none"
						src="/media/app/default-logo-dark.svg" />
					<!-- <img
						class="small-logo min-h-[22px] max-w-none"
						src="/media/app/mini-logo.svg" /> -->
				</a>
				<!-- <button
				class="kt-btn kt-btn-outline kt-btn-icon size-[30px] absolute start-full top-2/4 -translate-x-2/4 -translate-y-2/4 rtl:translate-x-2/4"
				data-kt-toggle="body"
				data-kt-toggle-class="kt-sidebar-collapse"
				id="sidebar_toggle">
				<i
					class="ki-filled ki-black-left-line kt-toggle-active:rotate-180 transition-all duration-300 rtl:translate rtl:rotate-180 rtl:kt-toggle-active:rotate-0">
				</i>
			</button> -->
			</div>

			<!-- Topbar -->
			<div class="flex items-center gap-2.5 w-full justify-end">
				<!-- User -->
				<div class="flex items-center gap-3">
					<!-- User -->
					<div class="cursor-pointer shrink-0" data-kt-dropdown-toggle="true">
						<img
							alt=""
							class="size-9 rounded-full border-2 border-mono/25 shrink-0"
							src="/media/avatars/300-2.png" />
					</div>
					<!-- Navs -->
					<div class="flex items-center">
						<!-- Nav -->
						<div class="kt-menu kt-menu-default" data-kt-menu="true">
							<div
								class="kt-menu-item"
								data-kt-menu-item-offset="0,10px"
								data-kt-menu-item-placement="bottom-start"
								data-kt-menu-item-toggle="dropdown"
								data-kt-menu-item-trigger="hover">
								<button
									class="kt-menu-toggle capitalize text-mono text-sm font-medium">
									{{ authStore.user?.name || authStore.user?.email }}
									<span class="kt-menu-arrow">
										<i class="ki-filled ki-down"> </i>
									</span>
								</button>
								<div class="kt-menu-dropdown w-44 py-2">
									<div class="kt-menu-item">
										<a
											class="kt-menu-link"
											href="html/demo5/public-profile/profiles/default.html"
											tabindex="0">
											<span class="kt-menu-icon">
												<i class="ki-filled ki-profile-circle"> </i>
											</span>
											<span class="kt-menu-title"> Account </span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link" href="html/demo5.html" tabindex="0">
											<span class="kt-menu-icon">
												<i class="ki-filled ki-moon"> </i>
											</span>
											<span class="kt-menu-title mr-2"> Dark Mode </span>
											<input
												class="kt-switch"
												data-kt-theme-switch-state="dark"
												data-kt-theme-switch-toggle="true"
												name="check"
												type="checkbox"
												value="1" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- End of Navs -->
					<!-- End of User -->
				</div>
				<!-- End of User -->
			</div>
			<!-- End of Topbar -->
		</div>
		<!-- End of Container -->
	</header>
	<!-- End of Header -->
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();
</script>
