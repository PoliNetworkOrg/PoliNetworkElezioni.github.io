<template>
    <div>

<div  style="width:100%;text-align:center;display:block;" class="container2">
	 
	
		<div class="container8">
		<span class="lead" >
			
			<div class="tabDibattito3">
				<div class="tabDibattito2">
					<table class="tabDibattito"  >
						<tr class="trDibattito">
							<td class="tdDibattito">
								13 Maggio
							</td>
							<td class="tdDibattito">
								<table style="width:100%;" class="tabDibattito4">
									<tr>
										<td class="tdDibattito2">
											Sostenibilità e spazi
										</td>
									</tr>
									<tr>
								<td class="tdDibattito2">
											Didattica e università
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr class="trDibattito">
							<td class="tdDibattito">
								14 Maggio
							</td>
							<td class="tdDibattito">
										<table style="width:100%;" class="tabDibattito4">
									<tr>
								<td class="tdDibattito2">
											Tasse, accessibilità, DSU
										</td>
									</tr>
									<tr>
						<td class="tdDibattito2">
											Tematiche sociali, internazionalizzazione, welfare &amp; varie
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr class="trDibattito">
							<td class="tdDibattito">
								15 Maggio
							</td>
							<td class="tdDibattito">						
								Dibattito finale				
							</td>
						</tr>
					</table>
				</div>
			</div>
		
		</span>
		</div>
	</div>


        </div>
</template>

<script>
export default {
    props: {
        language:{
            type:String,
     
			required:true
        }
    }
}
</script>

<style >
.dibattito{
	font-size: calc(12px + 0.4rem + 0.7vw);
}
.tdDibattito{
	padding:6px;
	 border: 1px solid rgba(0, 0, 0, 0.153);
}

.tdDibattito2{
		padding:8px;
	font-size:calc(1px + 1.1rem);
	 border: 1px solid rgba(0, 0, 0, 0.143);
}

.tabDibattito{
	width:100%;
	margin:auto;

	 border-collapse: collapse;
  border-style: hidden;
	
}

.tabDibattito4{
		 border-collapse: collapse;
  border-style: hidden;
}

.tabDibattito2{
	width:100%;
	margin:auto;
	border: 1px solid rgba(0, 0, 0, 0.178);
	border-radius: calc(1rem + 1vw + 10px);
	padding-left: 6px;
	padding-right: 6px;
	padding-bottom:10px;
	padding-top: 5px;
}

.tabDibattito3{
	width:100%;
	margin:auto;
	max-width: calc(22rem + 1.1vw + 80px);
	padding-top: 1rem;
}
</style>