<template>
	<!-- Page -->
	<!-- Container -->
     <div class="kt-container-fixed" id="contentContainer">
     </div>
     <!-- End of Container -->
     <!-- Container -->
     <div class="kt-container-fixed">
      <div class="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
       <div class="flex flex-col justify-center gap-2">
        <h1 class="text-xl font-medium leading-none text-mono">
         SaaS Users
        </h1>
        <div class="flex items-center flex-wrap gap-1.5 font-medium">
         <span class="text-base text-secondary-foreground">
          All Members:
         </span>
         <span class="text-base text-foreground font-semibold me-2">
          49,053
         </span>
         <span class="text-base text-secondary-foreground">
          Pro Licenses
         </span>
         <span class="text-base text-foreground font-semibold">
          1724
         </span>
        </div>
       </div>
       <div class="flex items-center gap-2.5">
        <a class="kt-btn kt-btn-outline" href="#">
         Import CSV
        </a>
        <a class="kt-btn kt-btn-primary" href="#">
         Add Member
        </a>
       </div>
      </div>
     </div>
     <!-- End of Container -->
     <!-- Container -->
     <div class="kt-container-fixed">
      <div class="grid gap-5 lg:gap-7.5">
       <div class="kt-card kt-card-grid min-w-full">
        <div class="kt-card-header flex-wrap gap-2">
         <h3 class="kt-card-title text-sm">
          Showing 10 of 49,053 users
         </h3>
         <div class="flex flex-wrap gap-2 lg:gap-5">
          <div class="flex">
           <label class="kt-input">
            <i class="ki-filled ki-magnifier">
            </i>
            <input placeholder="Search users" type="text" value=""/>
           </label>
          </div>
          <div class="flex flex-wrap gap-2.5">
           <select class="kt-select w-36" data-kt-select="true" data-kt-select-placeholder="Select a status">
            <option value="1">
             Active
            </option>
            <option value="2">
             Disabled
            </option>
            <option value="2">
             Pending
            </option>
           </select>
           <select class="kt-select w-36" data-kt-select="true" data-kt-select-placeholder="Select a sort">
            <option value="1">
             Latest
            </option>
            <option value="2">
             Older
            </option>
            <option value="3">
             Oldest
            </option>
           </select>
           <button class="kt-btn kt-btn-outline kt-btn-primary">
            <i class="ki-filled ki-setting-4">
            </i>
            Filters
           </button>
          </div>
         </div>
        </div>
        <div class="kt-card-content">
         <div class="grid" data-kt-datatable="true" data-kt-datatable-page-size="10">
          <div class="kt-scrollable-x-auto">
           <table class="kt-table table-auto kt-table-border" data-kt-datatable-table="true">
            <thead>
             <tr>
              <th class="w-[60px] text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-check="true" type="checkbox"/>
              </th>
              <th class="min-w-[300px]">
               <span class="kt-table-col">
                <span class="kt-table-col-label">
                 Subscriber
                </span>
                <span class="kt-table-col-sort">
                </span>
               </span>
              </th>
              <th class="min-w-[200px]">
               <span class="kt-table-col">
                <span class="kt-table-col-label">
                 Products
                </span>
                <span class="kt-table-col-sort">
                </span>
               </span>
              </th>
              <th class="min-w-[175px]">
               <span class="kt-table-col">
                <span class="kt-table-col-label">
                 License
                </span>
                <span class="kt-table-col-sort">
                </span>
               </span>
              </th>
              <th class="min-w-[175px]">
               <span class="kt-table-col">
                <span class="kt-table-col-label">
                 Last Payment
                </span>
                <span class="kt-table-col-sort">
                </span>
               </span>
              </th>
              <th class="min-w-[137px]">
               <span class="kt-table-col">
                <span class="kt-table-col-label">
                 Enforce 2FA
                </span>
                <span class="kt-table-col-sort">
                </span>
               </span>
              </th>
              <th class="w-28 text-center">
               <span class="kt-table-col">
                <span class="kt-table-col-label">
                 Invoices
                </span>
                <span class="kt-table-col-sort">
                </span>
               </span>
              </th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-3.png">
                 <div class="flex flex-col">
                  <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                   Tyler Hero
                  </a>
                  <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                   tyler.hero@gmail.com
                  </a>
                 </div>
                </img>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 NFT
                </span>
                <span class="kt-badge kt-badge-outline">
                 Artwork
                </span>
                <span class="kt-badge kt-badge-outline">
                 Widget
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Premium
                </span>
                <span class="text-xs text-secondary-foreground">
                 4 months left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               6 Aug, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="2">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-1.png">
                 <div class="flex flex-col">
                  <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                   Esther Howard
                  </a>
                  <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                   esther.howard@gmail.com
                  </a>
                 </div>
                </img>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Design
                </span>
                <span class="kt-badge kt-badge-outline">
                 Template
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Trial
                </span>
                <span class="text-xs text-secondary-foreground">
                 16 days left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               21 Apr, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="3">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-11.png">
                 <div class="flex flex-col">
                  <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                   Jacob Jones
                  </a>
                  <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                   jacob.jones@gmail.com
                  </a>
                 </div>
                </img>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 App
                </span>
                <span class="kt-badge kt-badge-outline">
                 Plugin
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Premium
                </span>
                <span class="text-xs text-secondary-foreground">
                 2 months left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               14 Mar, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="4">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-2.png">
                 <div class="flex flex-col">
                  <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                   Cody Fisher
                  </a>
                  <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                   cody.fisher@gmail.com
                  </a>
                 </div>
                </img>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Template
                </span>
                <span class="kt-badge kt-badge-outline">
                 NFT
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Standard
                </span>
                <span class="text-xs text-secondary-foreground">
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               20 Apr, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="5">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-5.png">
                 <div class="flex flex-col">
                  <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                   Leslie Alexander
                  </a>
                  <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                   leslie.alexander@gmail.com
                  </a>
                 </div>
                </img>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Artwork
                </span>
                <span class="kt-badge kt-badge-outline">
                 App
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Premium
                </span>
                <span class="text-xs text-secondary-foreground">
                 6 months left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               29 Jan, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="6">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-4.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Robert Fox
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  robert.fox@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Design
                </span>
                <span class="kt-badge kt-badge-outline">
                 Widget
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Trial
                </span>
                <span class="text-xs text-secondary-foreground">
                 5 days left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               17 Mar, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="7">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-20.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Guy Hawkins
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  guy.hawkins@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Plugin
                </span>
                <span class="kt-badge kt-badge-outline">
                 Artwork
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Standard
                </span>
                <span class="text-xs text-secondary-foreground">
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               20 Jul, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="8">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-23.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Theresa Webb
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  theresa.webb@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 NFT
                </span>
                <span class="kt-badge kt-badge-outline">
                 Template
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Trial
                </span>
                <span class="text-xs text-secondary-foreground">
                 2 days left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               06 May, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="9">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-22.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Marvin McKinney
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  marvin.mckenney@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Widget
                </span>
                <span class="kt-badge kt-badge-outline">
                 App
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Premium
                </span>
                <span class="text-xs text-secondary-foreground">
                 1 months left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               16 Apr, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="10">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-18.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Ronald Richards
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  ronald.richards@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Artwork
                </span>
                <span class="kt-badge kt-badge-outline">
                 Design
                </span>
                <span class="kt-badge kt-badge-outline">
                 Plugin
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Premium
                </span>
                <span class="text-xs text-secondary-foreground">
                 3 months left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               15 Jun, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="11">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-6.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  William Wilson
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  william.wilson@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 App
                </span>
                <span class="kt-badge kt-badge-outline">
                 Design
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Trial
                </span>
                <span class="text-xs text-secondary-foreground">
                 10 days left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               28 Jul, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="12">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-7.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Sophia Anderson
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  sophia.anderson@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Plugin
                </span>
                <span class="kt-badge kt-badge-outline">
                 Template
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Standard
                </span>
                <span class="text-xs text-secondary-foreground">
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               12 Aug, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="13">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-8.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Mason Taylor
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  mason.taylor@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 NFT
                </span>
                <span class="kt-badge kt-badge-outline">
                 Artwork
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Premium
                </span>
                <span class="text-xs text-secondary-foreground">
                 5 months left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               09 Sep, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="14">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-9.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Isabella Lee
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  isabella.lee@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 App
                </span>
                <span class="kt-badge kt-badge-outline">
                 Widget
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Trial
                </span>
                <span class="text-xs text-secondary-foreground">
                 8 days left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               22 Oct, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="15">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-10.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  James Martinez
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  james.martinez@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Template
                </span>
                <span class="kt-badge kt-badge-outline">
                 Design
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Standard
                </span>
                <span class="text-xs text-secondary-foreground">
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               15 Nov, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="16">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-12.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Emily Thomas
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  emily.thomas@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Artwork
                </span>
                <span class="kt-badge kt-badge-outline">
                 Plugin
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Premium
                </span>
                <span class="text-xs text-secondary-foreground">
                 7 months left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               03 Dec, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="17">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-13.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Benjamin Harris
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  benjamin.harris@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 NFT
                </span>
                <span class="kt-badge kt-badge-outline">
                 App
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Trial
                </span>
                <span class="text-xs text-secondary-foreground">
                 12 days left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               21 Jan, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="18">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-14.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Charlotte Young
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  charlotte.young@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Template
                </span>
                <span class="kt-badge kt-badge-outline">
                 Plugin
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Standard
                </span>
                <span class="text-xs text-secondary-foreground">
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               10 Feb, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="19">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-15.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Henry Clark
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  henry.clark@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Design
                </span>
                <span class="kt-badge kt-badge-outline">
                 Widget
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Premium
                </span>
                <span class="text-xs text-secondary-foreground">
                 9 months left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               08 Mar, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="20">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-16.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Amelia Lewis
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  amelia.lewis@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Artwork
                </span>
                <span class="kt-badge kt-badge-outline">
                 Template
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Trial
                </span>
                <span class="text-xs text-secondary-foreground">
                 3 days left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               26 Apr, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="21">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-17.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Lucas Walker
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  lucas.walker@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 App
                </span>
                <span class="kt-badge kt-badge-outline">
                 Plugin
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Standard
                </span>
                <span class="text-xs text-secondary-foreground">
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               19 May, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="22">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-19.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Grace Allen
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  grace.allen@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Widget
                </span>
                <span class="kt-badge kt-badge-outline">
                 Design
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Premium
                </span>
                <span class="text-xs text-secondary-foreground">
                 11 months left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               03 Jun, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="23">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-21.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Jack Harris
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  jack.harris@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 NFT
                </span>
                <span class="kt-badge kt-badge-outline">
                 Template
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Trial
                </span>
                <span class="text-xs text-secondary-foreground">
                 9 days left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               25 Jul, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="24">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-24.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Aiden King
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  aiden.king@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 App
                </span>
                <span class="kt-badge kt-badge-outline">
                 Artwork
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Standard
                </span>
                <span class="text-xs text-secondary-foreground">
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               02 Aug, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="25">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-25.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Avery Green
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  avery.green@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Plugin
                </span>
                <span class="kt-badge kt-badge-outline">
                 Widget
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Premium
                </span>
                <span class="text-xs text-secondary-foreground">
                 10 months left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               15 Sep, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="26">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-26.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Ella White
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  ella.white@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 NFT
                </span>
                <span class="kt-badge kt-badge-outline">
                 Template
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Trial
                </span>
                <span class="text-xs text-secondary-foreground">
                 14 days left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               09 Oct, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="27">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-27.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Henry King
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  henry.king@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Design
                </span>
                <span class="kt-badge kt-badge-outline">
                 App
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Standard
                </span>
                <span class="text-xs text-secondary-foreground">
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               20 Nov, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="28">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-28.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Olivia Green
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  olivia.green@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Plugin
                </span>
                <span class="kt-badge kt-badge-outline">
                 Artwork
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Premium
                </span>
                <span class="text-xs text-secondary-foreground">
                 8 months left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               05 Dec, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="29">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-29.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Mason Lewis
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  mason.lewis@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Template
                </span>
                <span class="kt-badge kt-badge-outline">
                 Widget
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Trial
                </span>
                <span class="text-xs text-secondary-foreground">
                 7 days left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               22 Jan, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="30">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-30.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Sophia Lee
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  sophia.lee@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 Design
                </span>
                <span class="kt-badge kt-badge-outline">
                 Plugin
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Standard
                </span>
                <span class="text-xs text-secondary-foreground">
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               11 Feb, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-center">
               <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="31">
               </input>
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <img alt="" class="rounded-full size-7 shrink-0" src="/media/avatars/300-31.png"/>
                <div class="flex flex-col">
                 <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                  Matthew Martinez
                 </a>
                 <a class="text-sm text-secondary-foreground font-normal hover:text-primary" href="#">
                  matthew.martinez@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div class="flex flex-wrap gap-1.5">
                <span class="kt-badge kt-badge-outline">
                 NFT
                </span>
                <span class="kt-badge kt-badge-outline">
                 App
                </span>
               </div>
              </td>
              <td>
               <div class="flex flex-col">
                <span class="text-sm text-foreground font-medium">
                 Premium
                </span>
                <span class="text-xs text-secondary-foreground">
                 6 months left
                </span>
               </div>
              </td>
              <td class="text-foreground font-medium">
               28 Mar, 2024
              </td>
              <td>
               <input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
              </td>
              <td>
               <div class="flex justify-center">
                <a class="kt-link kt-link-underlined kt-link-dashed" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
            </tbody>
           </table>
          </div>
          <div class="kt-card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-secondary-foreground text-sm font-medium">
           <div class="flex items-center gap-2 order-2 md:order-1">
            Show
            <select class="kt-select w-16" data-kt-datatable-size="true" data-kt-select="" name="perpage">
            </select>
            per page
           </div>
           <div class="flex items-center gap-4 order-1 md:order-2">
            <span data-kt-datatable-info="true">
            </span>
            <div class="kt-datatable-pagination" data-kt-datatable-pagination="true">
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
       <div class="kt-card">
        <div class="kt-card-header">
         <h3 class="kt-card-title">
          FAQ
         </h3>
        </div>
        <div class="kt-card-content py-3">
         <div data-kt-accordion="true" data-kt-accordion-expand-all="true">
          <div class="kt-accordion-item not-last:border-b border-b-border" data-kt-accordion-item="true">
           <button aria-controls="faq_1_content" class="kt-accordion-toggle py-4" data-kt-accordion-toggle="#faq_1_content">
            <span class="text-base text-mono">
             How is pricing determined for each plan?
            </span>
            <span class="kt-accordion-active:hidden inline-flex">
             <i class="ki-filled ki-plus text-muted-foreground text-sm">
             </i>
            </span>
            <span class="kt-accordion-active:inline-flex hidden">
             <i class="ki-filled ki-minus text-muted-foreground text-sm">
             </i>
            </span>
           </button>
           <div class="kt-accordion-content hidden" id="faq_1_content">
            <div class="text-secondary-foreground text-base pb-4">
             Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision. Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision. Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision
            </div>
           </div>
          </div>
          <div class="kt-accordion-item not-last:border-b border-b-border" data-kt-accordion-item="true">
           <button aria-controls="faq_2_content" class="kt-accordion-toggle py-4" data-kt-accordion-toggle="#faq_2_content">
            <span class="text-base text-mono">
             What payment methods are accepted for subscriptions?
            </span>
            <span class="kt-accordion-active:hidden inline-flex">
             <i class="ki-filled ki-plus text-muted-foreground text-sm">
             </i>
            </span>
            <span class="kt-accordion-active:inline-flex hidden">
             <i class="ki-filled ki-minus text-muted-foreground text-sm">
             </i>
            </span>
           </button>
           <div class="kt-accordion-content hidden" id="faq_2_content">
            <div class="text-secondary-foreground text-base pb-4">
             Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision
            </div>
           </div>
          </div>
          <div class="kt-accordion-item not-last:border-b border-b-border" data-kt-accordion-item="true">
           <button aria-controls="faq_3_content" class="kt-accordion-toggle py-4" data-kt-accordion-toggle="#faq_3_content">
            <span class="text-base text-mono">
             Are there any hidden fees in the pricing?
            </span>
            <span class="kt-accordion-active:hidden inline-flex">
             <i class="ki-filled ki-plus text-muted-foreground text-sm">
             </i>
            </span>
            <span class="kt-accordion-active:inline-flex hidden">
             <i class="ki-filled ki-minus text-muted-foreground text-sm">
             </i>
            </span>
           </button>
           <div class="kt-accordion-content hidden" id="faq_3_content">
            <div class="text-secondary-foreground text-base pb-4">
             Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision
            </div>
           </div>
          </div>
          <div class="kt-accordion-item not-last:border-b border-b-border" data-kt-accordion-item="true">
           <button aria-controls="faq_4_content" class="kt-accordion-toggle py-4" data-kt-accordion-toggle="#faq_4_content">
            <span class="text-base text-mono">
             Is there a discount for annual subscriptions?
            </span>
            <span class="kt-accordion-active:hidden inline-flex">
             <i class="ki-filled ki-plus text-muted-foreground text-sm">
             </i>
            </span>
            <span class="kt-accordion-active:inline-flex hidden">
             <i class="ki-filled ki-minus text-muted-foreground text-sm">
             </i>
            </span>
           </button>
           <div class="kt-accordion-content hidden" id="faq_4_content">
            <div class="text-secondary-foreground text-base pb-4">
             Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision
            </div>
           </div>
          </div>
          <div class="kt-accordion-item not-last:border-b border-b-border" data-kt-accordion-item="true">
           <button aria-controls="faq_5_content" class="kt-accordion-toggle py-4" data-kt-accordion-toggle="#faq_5_content">
            <span class="text-base text-mono">
             Do you offer refunds on subscription cancellations?
            </span>
            <span class="kt-accordion-active:hidden inline-flex">
             <i class="ki-filled ki-plus text-muted-foreground text-sm">
             </i>
            </span>
            <span class="kt-accordion-active:inline-flex hidden">
             <i class="ki-filled ki-minus text-muted-foreground text-sm">
             </i>
            </span>
           </button>
           <div class="kt-accordion-content hidden" id="faq_5_content">
            <div class="text-secondary-foreground text-base pb-4">
             Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision
            </div>
           </div>
          </div>
          <div class="kt-accordion-item not-last:border-b border-b-border" data-kt-accordion-item="true">
           <button aria-controls="faq_6_content" class="kt-accordion-toggle py-4" data-kt-accordion-toggle="#faq_6_content">
            <span class="text-base text-mono">
             Can I add extra features to my current plan?
            </span>
            <span class="kt-accordion-active:hidden inline-flex">
             <i class="ki-filled ki-plus text-muted-foreground text-sm">
             </i>
            </span>
            <span class="kt-accordion-active:inline-flex hidden">
             <i class="ki-filled ki-minus text-muted-foreground text-sm">
             </i>
            </span>
           </button>
           <div class="kt-accordion-content hidden" id="faq_6_content">
            <div class="text-secondary-foreground text-base pb-4">
             Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
       <div class="grid lg:grid-cols-2 gap-5 lg:gap-7.5">
        <div class="kt-card">
         <div class="kt-card-content px-10 py-7.5 lg:pr-12.5">
          <div class="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10">
           <div class="flex flex-col items-start gap-3">
            <h2 class="text-xl font-medium text-mono">
             Questions ?
            </h2>
            <p class="text-sm text-foreground leading-5.5 mb-2.5">
             Visit our Help Center for detailed assistance on billing, payments, and subscriptions.
            </p>
           </div>
           <img alt="image" class="dark:hidden max-h-[150px]" src="/media/illustrations/29.svg"/>
           <img alt="image" class="light:hidden max-h-[150px]" src="/media/illustrations/29-dark.svg"/>
          </div>
         </div>
         <div class="kt-card-footer justify-center">
          <a class="kt-link kt-link-underlined kt-link-dashed" href="">
           Go to Help Center
          </a>
         </div>
        </div>
        <div class="kt-card">
         <div class="kt-card-content px-10 py-7.5 lg:pr-12.5">
          <div class="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10">
           <div class="flex flex-col items-start gap-3">
            <h2 class="text-xl font-medium text-mono">
             Contact Support
            </h2>
            <p class="text-sm text-foreground leading-5.5 mb-2.5">
             Need assistance? Contact our support team for prompt, personalized help your queries & concerns.
            </p>
           </div>
           <img alt="image" class="dark:hidden max-h-[150px]" src="/media/illustrations/31.svg"/>
           <img alt="image" class="light:hidden max-h-[150px]" src="/media/illustrations/31-dark.svg"/>
          </div>
         </div>
         <div class="kt-card-footer justify-center">
          <a class="kt-link kt-link-underlined kt-link-dashed" href="https://devs.keenthemes.com/unresolved">
           Contact Support
          </a>
         </div>
        </div>
       </div>
      </div>
     </div>
     <!-- End of Container -->
	<!-- End of Page -->
</template>
