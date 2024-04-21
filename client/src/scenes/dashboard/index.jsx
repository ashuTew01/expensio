import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
	Box,
	Button,
	Typography,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { useGetAllExpensesQuery } from "state/api";
import { useSelector } from "react-redux";
import BreakdownChart from "components/BreakdownChart";

const Dashboard = () => {
	const theme = useTheme();
	const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

	const userId = JSON.parse(localStorage.getItem("userInfoExpensio"))?._id;

	const {
		data: expensesData,
		isLoading: expensesLoading,
		isError: expensesError,
	} = useGetAllExpensesQuery({ userId });

<<<<<<< HEAD
  // calculations to format data for pie chart of category
  const categoryTotals = {};
  expensesData?.expenses?.forEach((expense) => {
    const { category, amount } = expense;
    if (category.name in categoryTotals) {
      categoryTotals[category.name] += amount;
    } else {
      categoryTotals[category.name] = amount;
    }
  });

  // calculations to format data for pie chart of psychological type
  const psychologicalTotals = {};
  expensesData?.expenses?.forEach((expense) => {
    const { psychologicalType, amount } = expense;
    if (psychologicalType.name in psychologicalTotals) {
      psychologicalTotals[psychologicalType.name] += amount;
    } else {
      psychologicalTotals[psychologicalType.name] = amount;
    }
  });

  // console.log(categoryTotals);
=======
	// console.log(expensesData?.expenses);

	// calculations to format data for pie chart
	const categoryTotals = {};
	expensesData?.expenses?.forEach((expense) => {
		const { category, amount } = expense;
		if (category.name in categoryTotals) {
			categoryTotals[category.name] += amount;
		} else {
			categoryTotals[category.name] = amount;
		}
	});

	console.log(categoryTotals);
>>>>>>> 800155e3df4557dd041e662a4133385fd8a0743a

	return (
		<Box m="1.5rem 2.5rem">
			<FlexBetween>
				<Header title="DASHBOARD" subtitle="Keep track of your finances." />

				<Box>
					<Button
						sx={{
							backgroundColor: theme.palette.secondary.light,
							color: theme.palette.background.alt,
							fontSize: "14px",
							fontWeight: "bold",
							padding: "10px 20px",
						}}
					>
						EXPENSIO
					</Button>
				</Box>
			</FlexBetween>

			<Box
				mt="20px"
				display="grid"
				gridTemplateColumns="repeat(12, 1fr)"
				gridAutoRows="160px"
				gap="30px"
				sx={{
					"& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
				}}
			>
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor="transparent"
					p="1rem"
					borderRadius="0.55rem"
					display="flex"
					justifyContent="space-between"
				>
					<Box
						component="img"
						sx={{
							height: 330,
							width: 330,
							// maxHeight: { xs: 233, md: 167 },
							// maxWidth: { xs: 350, md: 250 },
						}}
						alt={"Love Earth"}
						src={"/dashboard.png"}
					/>
				</Box>
				<Box
					gridColumn="span 8"
					gridRow="span 2"
					backgroundColor="transparent"
					p="1rem"
					borderRadius="0.55rem"
					display="flex"
					flexDirection="column"
					mt="7rem"
				>
					<Box>
						<Typography variant="h1" sx={{ fontWeight: "bold" }}>
							Uncover Your Financial Story,
						</Typography>
						<Typography variant="h1" sx={{ fontWeight: "bold" }}>
							Shape Your Future
						</Typography>
						<Box height="10px"></Box>
					</Box>
					<Box width="38rem">
						<Typography variant="h4" sx={{ fontSize: "0.2 rem" }}>
							Empowering you to make informed decisions and achieve your
							financial dreams.
						</Typography>
					</Box>
				</Box>

        {/* category pie chart */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.secondary[100],
              fontWeight: "bold",
            }}
          >
            Monthly Expense by Category
          </Typography>
          <BreakdownChart categories={categoryTotals} isDashboard={true} />
          {/* <Typography
            p="0 0.6rem"
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Breakdown of expenses by the category.
          </Typography> */}
        </Box>

        {/* Psychological Pie Chart */}

        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.secondary[100],
              fontWeight: "bold",
            }}
          >
            Monthly Expense by Psychology Type
          </Typography>
          <BreakdownChart categories={psychologicalTotals} isDashboard={true} />
          {/* <Typography
            p="0 0.6rem"
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Breakdown of expenses by the category.
          </Typography> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
