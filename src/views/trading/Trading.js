import { useTheme } from '@mui/material/styles'
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material'

import BackgroundWrapper from './BackgroundWrapper'
import FormWrapper from './order/FormWrapper'
import OrderForm from './order/OrderForm'
import Chart from './chart/Index'
import MainCard from 'ui-component/cards/MainCard'
import OrderHistory from './orderHistory/Index'

const Login = () => {
	const theme = useTheme()
	const matchDownSM = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<BackgroundWrapper>
			<Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh', padding: 2 }}>
				<Grid container sx={{ minHeight: 'calc(100vh - 68px)' }}>
					<Grid item lg={9} mb={9} xs={12}>
						<MainCard>
							<Chart />
						</MainCard>
					</Grid>
					<Grid item lg={3} mb={3} xs={12} sx={{ paddingLeft: 2 }}>
						<FormWrapper>
							<Grid container spacing={2} justifyContent="center">
								<Grid item xs={12}>
									<Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
										<Grid item>
											<Stack alignItems="center" justifyContent="center" spacing={1}>
												<Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h3'}>
													Buy/Sell Order
												</Typography>
											</Stack>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={12}>
									<OrderForm />
								</Grid>
							</Grid>
						</FormWrapper>
						<MainCard sx={{ marginTop: 2 }}>
							<OrderHistory />
						</MainCard>
					</Grid>
				</Grid>
			</Grid>
		</BackgroundWrapper>
	)
}

export default Login
