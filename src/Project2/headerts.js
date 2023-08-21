"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderTs = void 0;
var React = require("react");
var AppBar_1 = require("@mui/material/AppBar");
var Box_1 = require("@mui/material/Box");
var Toolbar_1 = require("@mui/material/Toolbar");
var IconButton_1 = require("@mui/material/IconButton");
var Typography_1 = require("@mui/material/Typography");
var Menu_1 = require("@mui/material/Menu");
var Menu_2 = require("@mui/icons-material/Menu");
var Container_1 = require("@mui/material/Container");
var Avatar_1 = require("@mui/material/Avatar");
var Button_1 = require("@mui/material/Button");
var Tooltip_1 = require("@mui/material/Tooltip");
var MenuItem_1 = require("@mui/material/MenuItem");
var Adb_1 = require("@mui/icons-material/Adb");
var pages = ['Products', 'Pricing', 'Blog'];
var settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
 export function HeaderTs() {
    var _a = React.useState(null), anchorElNav = _a[0], setAnchorElNav = _a[1];
    var _b = React.useState(null), anchorElUser = _b[0], setAnchorElUser = _b[1];
    var handleOpenNavMenu = function (event) {
        setAnchorElNav(event.currentTarget);
    };
    var handleOpenUserMenu = function (event) {
        setAnchorElUser(event.currentTarget);
    };
    var handleCloseNavMenu = function () {
        setAnchorElNav(null);
    };
    var handleCloseUserMenu = function () {
        setAnchorElUser(null);
    };
    return (<AppBar_1.default position="static">
      <Container_1.default maxWidth="xl">
        <Toolbar_1.default disableGutters>
          <Adb_1.default sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
          <Typography_1.default variant="h6" noWrap component="a" href="/" sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
        }}>
            LOGO
          </Typography_1.default>

          <Box_1.default sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton_1.default size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <Menu_2.default />
            </IconButton_1.default>
            <Menu_1.default id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }} keepMounted transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{
            display: { xs: 'block', md: 'none' },
        }}>
              {pages.map(function (page) { return (<MenuItem_1.default key={page} onClick={handleCloseNavMenu}>
                  <Typography_1.default textAlign="center">{page}</Typography_1.default>
                </MenuItem_1.default>); })}
            </Menu_1.default>
          </Box_1.default>
          <Adb_1.default sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}/>
          <Typography_1.default variant="h5" noWrap component="a" href="/" sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
        }}>
            LOGO
          </Typography_1.default>
          <Box_1.default sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(function (page) { return (<Button_1.default key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button_1.default>); })}
          </Box_1.default>

          <Box_1.default sx={{ flexGrow: 0 }}>
            <Tooltip_1.default title="Open settings">
              <IconButton_1.default onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar_1.default alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
              </IconButton_1.default>
            </Tooltip_1.default>
            <Menu_1.default sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }} keepMounted transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
              {settings.map(function (setting) { return (<MenuItem_1.default key={setting} onClick={handleCloseUserMenu}>
                  <Typography_1.default textAlign="center">{setting}</Typography_1.default>
                </MenuItem_1.default>); })}
            </Menu_1.default>
          </Box_1.default>
        </Toolbar_1.default>
      </Container_1.default>
    </AppBar_1.default>);
}

