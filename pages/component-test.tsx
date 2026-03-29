import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Grid,
  Container,
  Paper,
  Chip,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  AlertTitle,
  Badge,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  IconButton,
  Fab,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Rating,
  LinearProgress,
  CircularProgress,
  Skeleton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Breadcrumbs,
  Link,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Autocomplete,
  ToggleButton,
  ToggleButtonGroup,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  AppBar,
  Toolbar,
  Drawer,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import {
  Home,
  Person,
  Settings,
  Search,
  Favorite,
  FavoriteBorder,
  Star,
  StarBorder,
  Add,
  Edit,
  Delete,
  Visibility,
  VisibilityOff,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Check,
  Close,
  Warning,
  Info,
  Error,
  CheckCircle,
  Menu,
  Notifications,
  AccountCircle,
  Email,
  Phone,
  LocationOn,
  Work,
  School,
  Language,
  GitHub,
  LinkedIn,
  Twitter,
  Mail,
  FileCopy,
  Save,
  Print,
  Share,
} from "@mui/icons-material";
import { useForm, FormProvider } from "react-hook-form";
import HFTextField from "../components/HFComponents/HFTextField";
import HFCheckbox from "../components/HFComponents/HFCheckbox";
import HFCheckboxes from "../components/HFComponents/HFCheckboxes";
import HFAutocomplete from "../components/HFComponents/HFAutocomplete";
import HFDatePicker from "../components/HFComponents/HFDatePicker";
import HFDocumentUpload from "../components/HFComponents/HFDocumentUpload";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`component-tabpanel-${index}`}
      aria-labelledby={`component-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
const ComponentTest = () => {
  const [tabValue, setTabValue] = useState(0);
  const [radioValue, setRadioValue] = useState("option1");
  const [sliderValue, setSliderValue] = useState(30);
  const [selectValue, setSelectValue] = useState("");
  const [autocompleteValue, setAutocompleteValue] = useState<{
    title: string;
    year: number;
  } | null>(null);
  const [toggleValue, setToggleValue] = useState("web");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const handleSelectChange = (event: any) => {
    setSelectValue(event.target.value);
  };

  const handleToggleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    if (newValue !== null) {
      setToggleValue(newValue);
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    {
      label: "Select campaign settings",
      description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "Create an ad group",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Create an ad",
      description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.`,
    },
  ];

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
  ];

  const speedDialActions = [
    { icon: <FileCopy />, name: "Copy" },
    { icon: <Save />, name: "Save" },
    { icon: <Print />, name: "Print" },
    { icon: <Share />, name: "Share" },
  ];

  const methods = useForm({
    defaultValues: {
      name: "",
      agree: false,
      skills: [],
      country: "",
      dob: null,
      resume: null,
    },
  });
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Box
      sx={{ flexGrow: 1, minHeight: "100vh", bgcolor: "background.default" }}
    >
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(true)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Next.js MUI Boilerplate - Component Test
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            <ListItem>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          className="text-gradient"
        >
          Component Testing Page
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          This page showcases all the Material-UI components with our custom
          theme and typography.
        </Typography>

        {/* Tabs */}
        <Paper sx={{ width: "100%", mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="component tabs"
          >
            <Tab label="Typography & Buttons" />
            <Tab label="Form Controls" />
            <Tab label="Data Display" />
            <Tab label="Navigation" />
            <Tab label="Feedback" />
            <Tab label="Layout" />
            <Tab label="HFComponents" />
          </Tabs>

          {/* Typography & Buttons */}
          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      Typography
                    </Typography>
                    <Typography variant="h1" gutterBottom>
                      H1 Heading
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                      H2 Heading
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                      H3 Heading
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                      H4 Heading
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      H5 Heading
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      H6 Heading
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Subtitle 1 - Inter font family
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Subtitle 2 - Inter font family
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Body 1 - Roboto font family with longer text to
                      demonstrate line height and spacing.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Body 2 - Roboto font family with smaller text.
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      Caption text - Inter font family
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                      Overline text - Inter font family
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      Buttons
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Button variant="contained" sx={{ mr: 1, mb: 1 }}>
                        Contained
                      </Button>
                      <Button variant="outlined" sx={{ mr: 1, mb: 1 }}>
                        Outlined
                      </Button>
                      <Button variant="text" sx={{ mr: 1, mb: 1 }}>
                        Text
                      </Button>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                      >
                        Small
                      </Button>
                      <Button
                        variant="contained"
                        size="medium"
                        sx={{ mr: 1, mb: 1 }}
                      >
                        Medium
                      </Button>
                      <Button
                        variant="contained"
                        size="large"
                        sx={{ mr: 1, mb: 1 }}
                      >
                        Large
                      </Button>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ mr: 1, mb: 1 }}
                      >
                        Primary
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        sx={{ mr: 1, mb: 1 }}
                      >
                        Secondary
                      </Button>
                      <Button
                        variant="contained"
                        color="success"
                        sx={{ mr: 1, mb: 1 }}
                      >
                        Success
                      </Button>
                      <Button
                        variant="contained"
                        color="warning"
                        sx={{ mr: 1, mb: 1 }}
                      >
                        Warning
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ mr: 1, mb: 1 }}
                      >
                        Error
                      </Button>
                      <Button
                        variant="contained"
                        color="info"
                        sx={{ mr: 1, mb: 1 }}
                      >
                        Info
                      </Button>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <IconButton color="primary" sx={{ mr: 1 }}>
                        <Favorite />
                      </IconButton>
                      <IconButton color="secondary" sx={{ mr: 1 }}>
                        <Edit />
                      </IconButton>
                      <IconButton color="success" sx={{ mr: 1 }}>
                        <Check />
                      </IconButton>
                      <IconButton color="error" sx={{ mr: 1 }}>
                        <Delete />
                      </IconButton>
                    </Box>
                    <Box>
                      <Fab color="primary" sx={{ mr: 2 }}>
                        <Add />
                      </Fab>
                      <Fab color="secondary" sx={{ mr: 2 }}>
                        <Edit />
                      </Fab>
                      <Fab color="success">
                        <Check />
                      </Fab>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Form Controls */}
          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      Form Controls
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      <TextField
                        fullWidth
                        label="Standard Text Field"
                        variant="outlined"
                        sx={{ mb: 2 }}
                      />
                      <TextField
                        fullWidth
                        label="With Helper Text"
                        helperText="This is helper text"
                        variant="outlined"
                        sx={{ mb: 2 }}
                      />
                      <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        sx={{ mb: 2 }}
                      />
                      <TextField
                        fullWidth
                        label="Multiline"
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{ mb: 2 }}
                      />
                    </Box>

                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <InputLabel>Select Option</InputLabel>
                      <Select
                        value={selectValue}
                        label="Select Option"
                        onChange={handleSelectChange}
                      >
                        <MenuItem value="option1">Option 1</MenuItem>
                        <MenuItem value="option2">Option 2</MenuItem>
                        <MenuItem value="option3">Option 3</MenuItem>
                      </Select>
                    </FormControl>

                    <Autocomplete
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      value={autocompleteValue}
                      onChange={(event, newValue) =>
                        setAutocompleteValue(
                          newValue as { title: string; year: number } | null
                        )
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Autocomplete"
                          variant="outlined"
                        />
                      )}
                      sx={{ mb: 2 }}
                    />

                    <Box sx={{ mb: 2 }}>
                      <Typography gutterBottom>Slider</Typography>
                      <Slider
                        value={sliderValue}
                        onChange={handleSliderChange}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      Selection Controls
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Checked Checkbox"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Unchecked Checkbox"
                      />
                      <FormControlLabel
                        control={<Checkbox disabled />}
                        label="Disabled Checkbox"
                      />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography gutterBottom>Radio Group</Typography>
                      <RadioGroup
                        value={radioValue}
                        onChange={handleRadioChange}
                      >
                        <FormControlLabel
                          value="option1"
                          control={<Radio />}
                          label="Option 1"
                        />
                        <FormControlLabel
                          value="option2"
                          control={<Radio />}
                          label="Option 2"
                        />
                        <FormControlLabel
                          value="option3"
                          control={<Radio />}
                          label="Option 3"
                        />
                      </RadioGroup>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Switch On"
                      />
                      <FormControlLabel
                        control={<Switch />}
                        label="Switch Off"
                      />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography gutterBottom>Toggle Buttons</Typography>
                      <ToggleButtonGroup
                        value={toggleValue}
                        exclusive
                        onChange={handleToggleChange}
                        aria-label="text alignment"
                      >
                        <ToggleButton value="web" aria-label="web">
                          Web
                        </ToggleButton>
                        <ToggleButton value="android" aria-label="android">
                          Android
                        </ToggleButton>
                        <ToggleButton value="ios" aria-label="ios">
                          iOS
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </Box>

                    <Box>
                      <Typography gutterBottom>Rating</Typography>
                      <Rating value={4} readOnly />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Data Display */}
          <TabPanel value={tabValue} index={2}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      Data Display
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      <Typography gutterBottom>Chips</Typography>
                      <Chip label="Basic Chip" sx={{ mr: 1, mb: 1 }} />
                      <Chip
                        label="Primary Chip"
                        color="primary"
                        sx={{ mr: 1, mb: 1 }}
                      />
                      <Chip
                        label="Secondary Chip"
                        color="secondary"
                        sx={{ mr: 1, mb: 1 }}
                      />
                      <Chip
                        label="Success Chip"
                        color="success"
                        sx={{ mr: 1, mb: 1 }}
                      />
                      <Chip
                        label="Warning Chip"
                        color="warning"
                        sx={{ mr: 1, mb: 1 }}
                      />
                      <Chip
                        label="Error Chip"
                        color="error"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography gutterBottom>Avatars</Typography>
                      <Avatar sx={{ mr: 1, mb: 1 }}>A</Avatar>
                      <Avatar sx={{ mr: 1, mb: 1 }}>B</Avatar>
                      <Avatar sx={{ mr: 1, mb: 1 }}>
                        <Person />
                      </Avatar>
                      <Avatar sx={{ mr: 1, mb: 1, bgcolor: "primary.main" }}>
                        <Work />
                      </Avatar>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography gutterBottom>Badges</Typography>
                      <Badge badgeContent={4} color="primary" sx={{ mr: 2 }}>
                        <Mail />
                      </Badge>
                      <Badge badgeContent={10} color="secondary" sx={{ mr: 2 }}>
                        <Notifications />
                      </Badge>
                      <Badge badgeContent={99} color="error">
                        <AccountCircle />
                      </Badge>
                    </Box>

                    <Box>
                      <Typography gutterBottom>List</Typography>
                      <List>
                        <ListItem>
                          <Avatar>
                            <Person />
                          </Avatar>
                          <ListItemText
                            primary="John Doe"
                            secondary="Software Engineer"
                          />
                        </ListItem>
                        <Divider />
                        <ListItem>
                          <Avatar>
                            <Work />
                          </Avatar>
                          <ListItemText
                            primary="Jane Smith"
                            secondary="Product Manager"
                          />
                        </ListItem>
                      </List>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      Tables & Progress
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      <Typography gutterBottom>Progress Indicators</Typography>
                      <LinearProgress sx={{ mb: 2 }} />
                      <LinearProgress
                        variant="determinate"
                        value={60}
                        sx={{ mb: 2 }}
                      />
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <CircularProgress />
                        <CircularProgress variant="determinate" value={75} />
                      </Box>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography gutterBottom>Skeleton</Typography>
                      <Skeleton variant="text" sx={{ mb: 1 }} />
                      <Skeleton
                        variant="circular"
                        width={40}
                        height={40}
                        sx={{ mb: 1 }}
                      />
                      <Skeleton
                        variant="rectangular"
                        width={210}
                        height={118}
                      />
                    </Box>

                    <Box>
                      <Typography gutterBottom>Simple Table</Typography>
                      <TableContainer component={Paper}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Name</TableCell>
                              <TableCell>Role</TableCell>
                              <TableCell>Status</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>John Doe</TableCell>
                              <TableCell>Developer</TableCell>
                              <TableCell>
                                <Chip
                                  label="Active"
                                  color="success"
                                  size="small"
                                />
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Jane Smith</TableCell>
                              <TableCell>Designer</TableCell>
                              <TableCell>
                                <Chip
                                  label="Away"
                                  color="warning"
                                  size="small"
                                />
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Navigation */}
          <TabPanel value={tabValue} index={3}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      Navigation
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      <Typography gutterBottom>Breadcrumbs</Typography>
                      <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="#">
                          Home
                        </Link>
                        <Link underline="hover" color="inherit" href="#">
                          Components
                        </Link>
                        <Typography color="text.primary">Navigation</Typography>
                      </Breadcrumbs>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography gutterBottom>Pagination</Typography>
                      <Pagination count={10} color="primary" />
                    </Box>

                    <Box>
                      <Typography gutterBottom>Speed Dial</Typography>
                      <SpeedDial
                        ariaLabel="SpeedDial example"
                        sx={{ position: "relative" }}
                        icon={<SpeedDialIcon />}
                      >
                        {speedDialActions.map((action) => (
                          <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                          />
                        ))}
                      </SpeedDial>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      Stepper
                    </Typography>
                    <Box>
                      <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                          <Step key={step.label}>
                            <StepLabel>{step.label}</StepLabel>
                            <StepContent>
                              <Typography>{step.description}</Typography>
                              <Box sx={{ mb: 2 }}>
                                <div>
                                  <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 1, mr: 1 }}
                                  >
                                    {index === steps.length - 1
                                      ? "Finish"
                                      : "Continue"}
                                  </Button>
                                  <Button
                                    disabled={index === 0}
                                    onClick={handleBack}
                                    sx={{ mt: 1, mr: 1 }}
                                  >
                                    Back
                                  </Button>
                                </div>
                              </Box>
                            </StepContent>
                          </Step>
                        ))}
                      </Stepper>
                      {activeStep === steps.length && (
                        <Paper
                          square
                          elevation={0}
                          sx={{ p: 3, mt: 3, bgcolor: "grey.50" }}
                        >
                          <Typography>
                            All steps completed - you&apos;re finished
                          </Typography>
                          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Reset
                          </Button>
                        </Paper>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Feedback */}
          <TabPanel value={tabValue} index={4}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      Alerts
                    </Typography>
                    <Alert severity="error" sx={{ mb: 2 }}>
                      <AlertTitle>Error</AlertTitle>
                      This is an error alert — check it out!
                    </Alert>
                    <Alert severity="warning" sx={{ mb: 2 }}>
                      <AlertTitle>Warning</AlertTitle>
                      This is a warning alert — check it out!
                    </Alert>
                    <Alert severity="info" sx={{ mb: 2 }}>
                      <AlertTitle>Info</AlertTitle>
                      This is an info alert — check it out!
                    </Alert>
                    <Alert severity="success" sx={{ mb: 2 }}>
                      <AlertTitle>Success</AlertTitle>
                      This is a success alert — check it out!
                    </Alert>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      Dialogs & Snackbars
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      <Button
                        variant="contained"
                        onClick={() => setDialogOpen(true)}
                      >
                        Open Dialog
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        variant="contained"
                        onClick={() => setSnackbarOpen(true)}
                      >
                        Open Snackbar
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Layout */}
          <TabPanel value={tabValue} index={5}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      Accordion
                    </Typography>
                    <Accordion>
                      <AccordionSummary expandIcon={<KeyboardArrowDown />}>
                        <Typography>Accordion 1</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary expandIcon={<KeyboardArrowDown />}>
                        <Typography>Accordion 2</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      Tooltips
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                      <Tooltip title="Delete">
                        <IconButton>
                          <Delete />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Add to favorites">
                        <IconButton>
                          <Favorite />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="View details">
                        <IconButton>
                          <Visibility />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* HFComponents */}
          <TabPanel value={tabValue} index={6}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <HFTextField name="name" label="Name" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <HFCheckbox name="agree" label="I agree to terms" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <HFCheckboxes
                      name="skills"
                      label="Skills"
                      options={[
                        { label: "React", value: "react" },
                        { label: "Vue", value: "vue" },
                        { label: "Angular", value: "angular" },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <HFAutocomplete
                      name="country"
                      label="Country"
                      options={[
                        { label: "USA", value: "usa" },
                        { label: "Canada", value: "canada" },
                        { label: "UK", value: "uk" },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <HFDatePicker name="dob" label="Date of Birth" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <HFDocumentUpload name="resume" label="Upload Resume" />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </FormProvider>
          </TabPanel>
        </Paper>
      </Container>

      {/* Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <Typography>
            This is a dialog content. You can put any content here including
            forms, images, or other components.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={() => setDialogOpen(false)} variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="This is a snackbar message"
        action={
          <IconButton
            size="small"
            color="inherit"
            onClick={() => setSnackbarOpen(false)}
          >
            <Close fontSize="small" />
          </IconButton>
        }
      />
    </Box>
  );
};

export default ComponentTest;
