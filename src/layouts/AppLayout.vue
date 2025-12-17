<script setup lang="ts">
import SearchModal from '../components/SearchModal.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
	<!-- Main -->
	<div class="flex grow">
		<!-- Sidebar -->
		<Sidebar />
		<!-- End of Sidebar -->
		<!-- Wrapper -->
		<div class="kt-wrapper flex grow flex-col">
			<!-- Header -->
			<Header />
			<!-- End of Header -->
			<!-- Content -->
			<main class="grow pt-5" id="content" role="content">
				<RouterView />
			</main>
			<!-- End of Content -->
			<!-- Footer -->
			<Footer />
			<!-- End of Footer -->
		</div>
		<!-- End of Wrapper -->
	</div>
	<!-- End of Main -->
	<SearchModal />
</template>
