(self["webpackChunkmetro_wallet_extension"] = self["webpackChunkmetro_wallet_extension"] || []).push([["main"],{

/***/ 62402:
/*!*******************************************!*\
  !*** ./metro_scripts/src/api/metroRPC.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetroRPC": () => (/* binding */ MetroRPC),
/* harmony export */   "EVMRPC": () => (/* binding */ EVMRPC),
/* harmony export */   "MetroRequest": () => (/* binding */ MetroRequest)
/* harmony export */ });
/* --- Note # xdjtx # we are one @
    metroRPC.js contains classes n constants that simplify passing messages
    from the hard_working_metro_worker.js <---> metro_fluid_injector.js
    as well as metro_injected_fluids <--->  metro_fluid_injector.js.
*/
const MetroRPC = {
    //Open or closes the metro popup, ex the popup when you open the wallet through a dex.
    'CLOSE_POPUP': 'closePopup',
    'OPEN_POPUP': 'openPopup',
    //Approve, Reject, Or Request access to the wallet addresses, this connects the dApp to the wallet.
    'APPROVE_ACCESS': 'approveAccess',
    'REJECT_ACCESS': 'rejectAccess',
    'REQUEST_ACCESS': 'requestAccess',
    //Updates the chainId.
    'CHANGE_CHAIN_ID': 'changeChainId',
    //Updates the chainId.
    'CHANGE_ACCOUNTS': 'changeAccounts',
    'SET_NODE_URI': 'SET_NODE_URI',
    //Closes connection with the specified dApp.
    'CLOSE_CONNECTION': 'closeConnection',
    //Adds a new transaction to track (sends notification if its accepted n stuff...)
    'ADD_TRANSACTION': 'addTransaction',
    'GET_SUCCESFUL_TRANSACTIONS': 'getSuccessfulTransactions',
    'CLEAR_PENDING_TRANSACTIONS': 'clearPendingTransactions',
    //Initializes cached seed (which is encrypted)
    'INIT_WORKER_VAULT': 'initWorkerVault',
    //requests the cached seed (encrypted)
    'REQUEST_SEED': 'requestSeed',
    //Deletes the stored vault (seed n shit) from the worker.
    'DELETE_VAULT': 'deleteVault',
    //Returns a map containing all the ports the wallet has approved connection for.
    'GET_CURRENT_CONNECTIONS': 'getCurrentConnections',
    'DELETE_PORT': 'deletePort' //Deletes a connection.
};
/* I chose to also have EVM RPC constants, variables named EVM_'METHOD' instead of the ETH prefix since it makes more sense to me. */
const EVMRPC = {
    'EVM_GET_BLOCK_BY_NUMBER': 'eth_getBlockByNumber',
    'EVM_GET_BALANCE': 'eth_getBalance',
    'EVM_CALL': 'eth_call',
    'EVM_SEND_TRANSACTION': 'eth_sendTransaction',
    'EVM_GET_TRANSACTION_RECEIPT': 'eth_getTransactionReceipt',
    'EVM_ESTIMATE_GAS': 'eth_estimateGas',
    'EVM_BLOCK_NUMBER': 'eth_blockNumber',
    'EVM_GAS_PRICE': 'eth_gasPrice',
};
//Just a wrapper for requests to make things easier.
class MetroRequest {
    constructor(method, data) {
        this.method = method;
        this.data = data;
    }
    /**
     * Returns a promise containing the RPC Response.
     * ____
     * @param {string} rpcURL The URL/URI the method will post the request to.
     */
    postJsonRPC(rpcURL) {
        return fetch(rpcURL, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                method: this.method,
                params: this.data,
                id: 1,
                jsonrpc: '2.0'
            })
        });
    }
}


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletUnlockStages": () => (/* binding */ WalletUnlockStages),
/* harmony export */   "CurrentTabs": () => (/* binding */ CurrentTabs),
/* harmony export */   "Modals": () => (/* binding */ Modals),
/* harmony export */   "CurrentPopups": () => (/* binding */ CurrentPopups),
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 92437);
/* harmony import */ var src_metro_backend_walletState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/metro_backend/walletState */ 8963);
/* harmony import */ var metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! metro_scripts/src/api/metroRPC */ 62402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 18259);






function AppComponent_div_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-send-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sendButtonClick", function AppComponent_div_0_div_2_div_1_Template_app_send_tab_sendButtonClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      ctx_r9.setPopup(ctx_r9.currentPopup.SEND_POPUP);
      return ctx_r9.togglePopup();
    })("connectButtonClick", function AppComponent_div_0_div_2_div_1_Template_app_send_tab_connectButtonClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      ctx_r11.setPopup(ctx_r11.currentPopup.CONNECT_POPUP);
      return ctx_r11.togglePopup();
    })("addTokenButtonClick", function AppComponent_div_0_div_2_div_1_Template_app_send_tab_addTokenButtonClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r12.addNewToken();
    })("openAccountSettings", function AppComponent_div_0_div_2_div_1_Template_app_send_tab_openAccountSettings_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r13.openAccountSettingsModal();
    })("openTxHash", function AppComponent_div_0_div_2_div_1_Template_app_send_tab_openTxHash_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r14.openTxInExplorer($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("currentAddress", ctx_r6.currentWalletAddress)("djtxAmount", ctx_r6.wallet.djtxAmountWhole)("tokenArray", ctx_r6.wallet.tokensCache.tokenVault.tokens)("currentAddressIndex", ctx_r6.wallet.currentWallet.index)("txHistory", ctx_r6.wallet.txHistory.history.transactions)("isSearchingTokens", ctx_r6.wallet.isSearchingTokens);
  }
}

function AppComponent_div_0_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-assets-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("addTokenButtonClick", function AppComponent_div_0_div_2_div_2_Template_app_assets_tab_addTokenButtonClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r15.addNewToken();
    })("openTxHash", function AppComponent_div_0_div_2_div_2_Template_app_assets_tab_openTxHash_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r17.openTxInExplorer($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tokenArray", ctx_r7.wallet.tokensCache.tokenVault.tokens)("txHistory", ctx_r7.wallet.txHistory.history.transactions);
  }
}

function AppComponent_div_0_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-settings-tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("setChainID", function AppComponent_div_0_div_2_div_3_Template_app_settings_tab_setChainID_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r18.updateChainID($event);
    })("clearTransactionHistory", function AppComponent_div_0_div_2_div_3_Template_app_settings_tab_clearTransactionHistory_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r20.clearTxHistory();
    })("deleteWallet", function AppComponent_div_0_div_2_div_3_Template_app_settings_tab_deleteWallet_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r21.deleteWallet();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("walletState", ctx_r8.wallet);
  }
}

function AppComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_div_0_div_2_div_1_Template, 2, 7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppComponent_div_0_div_2_div_2_Template, 2, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AppComponent_div_0_div_2_div_3_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-popup", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("closePopup", function AppComponent_div_0_div_2_Template_app_popup_closePopup_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r22.togglePopup();
    })("openConnectionModalEvent", function AppComponent_div_0_div_2_Template_app_popup_openConnectionModalEvent_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r24.openConnectionModal($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.tabs.tab == ctx_r4.currentTab.SEND_TAB);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.tabs.tab == ctx_r4.currentTab.ASSETS_TAB);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.tabs.tab == ctx_r4.currentTab.SETTINGS_TAB);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("popupState", ctx_r4.popups.popup)("showPopup", ctx_r4.showPopup)("tokenArray", ctx_r4.wallet.tokensCache.tokenVault.tokens)("currentDjtxAmount", ctx_r4.wallet.djtxAmountWholePrecise)("walletState", ctx_r4.wallet)("connectedPorts", ctx_r4.arrayOfConnections);
  }
}

function AppComponent_div_0_app_modal_module_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-modal-module", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("closeModalButton", function AppComponent_div_0_app_modal_module_3_Template_app_modal_module_closeModalButton_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r25.closeModal();
    })("deleteConnectionEvent", function AppComponent_div_0_app_modal_module_3_Template_app_modal_module_deleteConnectionEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r27.deleteConnection($event);
    })("switchToPreviousAccount", function AppComponent_div_0_app_modal_module_3_Template_app_modal_module_switchToPreviousAccount_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r28.previousAccount();
    })("switchToNextAccount", function AppComponent_div_0_app_modal_module_3_Template_app_modal_module_switchToNextAccount_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r29.nextAccount();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showModal", ctx_r5.isModalEnabled)("currentModal", ctx_r5.currentModal.modal)("connectionInfoPort", ctx_r5.selectedPort)("currentAddressIndex", ctx_r5.wallet.currentWallet.index)("currentAccountAddress", ctx_r5.currentWalletAddress)("djtxBalance", ctx_r5.wallet.djtxAmountWhole);
  }
}

function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppComponent_div_0_div_2_Template, 5, 9, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AppComponent_div_0_app_modal_module_3_Template, 1, 6, "app-modal-module", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.wallet != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.wallet != null);
  }
}

function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-unlock-wallet-page", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSeedDecrypt", function AppComponent_div_1_Template_app_unlock_wallet_page_onSeedDecrypt_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r30.initWallet($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("seedStage", ctx_r1.currentWalletStage)("encryptedSeed", ctx_r1.encryptedSeedData);
  }
}

function AppComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-onboarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function AppComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "g", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Decypher is already open somewhere else! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
/* --- Note # xavax # we are one @
    This wallet is fairly straight-forward, a dev should be able to verify all the code in one(or at least less than 10 :p)
    sitting, this is an important part for the Metro web wallet.
*/

/*#------------------------------------------------------------------------------------------------------#*/


var WalletUnlockStages;

(function (WalletUnlockStages) {
  WalletUnlockStages[WalletUnlockStages["PASSWORD_AND_PINCODE"] = 0] = "PASSWORD_AND_PINCODE";
  WalletUnlockStages[WalletUnlockStages["ONBOARDING"] = 1] = "ONBOARDING";
  WalletUnlockStages[WalletUnlockStages["UNLOCKED"] = 2] = "UNLOCKED";
  WalletUnlockStages[WalletUnlockStages["PINCODE"] = 3] = "PINCODE";
  WalletUnlockStages[WalletUnlockStages["NONE"] = 4] = "NONE";
})(WalletUnlockStages || (WalletUnlockStages = {}));

var CurrentTabs;

(function (CurrentTabs) {
  CurrentTabs[CurrentTabs["SETTINGS_TAB"] = 0] = "SETTINGS_TAB";
  CurrentTabs[CurrentTabs["ASSETS_TAB"] = 1] = "ASSETS_TAB";
  CurrentTabs[CurrentTabs["SEND_TAB"] = 2] = "SEND_TAB";
})(CurrentTabs || (CurrentTabs = {}));

class Tabs {
  constructor(tab) {
    this.tab = tab;
  }

}

var Modals;

(function (Modals) {
  Modals[Modals["VIEW_TRANSACTION_INFO"] = 0] = "VIEW_TRANSACTION_INFO";
  Modals[Modals["VIEW_CONNECTION_INFO"] = 1] = "VIEW_CONNECTION_INFO";
  Modals[Modals["ACCOUNT_SETTINGS"] = 2] = "ACCOUNT_SETTINGS";
  Modals[Modals["VIEW_TOKEN_INFO"] = 3] = "VIEW_TOKEN_INFO";
  Modals[Modals["ADD_TOKEN"] = 4] = "ADD_TOKEN";
  Modals[Modals["NONE"] = 5] = "NONE";
})(Modals || (Modals = {}));

class CurrentModal {
  constructor(modal) {
    this.modal = modal;
  }

}

var CurrentPopups;

(function (CurrentPopups) {
  CurrentPopups[CurrentPopups["CONNECT_POPUP"] = 0] = "CONNECT_POPUP";
  CurrentPopups[CurrentPopups["SEND_POPUP"] = 1] = "SEND_POPUP";
})(CurrentPopups || (CurrentPopups = {}));

class Popups {
  constructor(popup) {
    this.popup = popup;
  }

}

class AppComponent {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.title = 'Decypher'; //A tab is the current page of the wallet that is displayed, i.e send tab, assets tab, settings tab, etc.

    this.currentTab = CurrentTabs;
    this.isModalEnabled = false;
    this.modals = Modals;
    this.currentModal = new CurrentModal(Modals.NONE); //A Popup is a window that is hidden, but can be "popped-up" from the bottom of the wallet, the popup is used
    //to increase the amount of functionality in a smaller wallet-view, and also provide a convenient way to show
    //arbitrary data.

    this.currentPopup = CurrentPopups;
    this.currentConnections = null;
    this.arrayOfConnections = null;
    this.selectedPort = null; //public isWalletInitialized: boolean | null = null; //if we have initialized the wallet with a seed/priv-key/ledger.

    this.walletStages = WalletUnlockStages;
    this.currentWalletStage = this.walletStages.NONE;
    this.encryptedSeedData = ''; //public wallet: WalletState = new WalletState("between trash soccer inflict quit gorilla oblige ordinary ski duty member result train connect surface behind state regular nominee school rice core drink craft");

    this.wallet = null;
    this.currentWalletAddress = "";
    this.tabs = new Tabs(CurrentTabs.SEND_TAB);
    this.popups = new Popups(CurrentPopups.SEND_POPUP);
    this.showPopup = false;
  }

  ngOnInit() {
    // 1 - Try to get seed from worker
    // 2 - If worker isn't initialized with a seed, we try get seed from local storage, then we init worker with encrypted seed.
    // 3 - does local-storage not have the double encrypted seed? Then we need to create/import a new wallet.
    var _a, _b; //Seed is two-layer encrypted with: Pin and Password.


    (_a = navigator.serviceWorker.controller) === null || _a === void 0 ? void 0 : _a.postMessage({
      method: metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_2__.MetroRPC.REQUEST_SEED
    });
    (_b = navigator.serviceWorker.controller) === null || _b === void 0 ? void 0 : _b.postMessage({
      method: metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_2__.MetroRPC.GET_CURRENT_CONNECTIONS
    });

    navigator.serviceWorker.onmessage = event => {
      if (event.data) {
        this.ngZone.run(() => {
          if (event.data.method == metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_2__.MetroRPC.GET_CURRENT_CONNECTIONS) {
            this.currentConnections = JSON.parse(event.data.data.ports);
            this.arrayOfConnections = Object.values(this.currentConnections);
          }

          if (event.data.method == metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_2__.MetroRPC.REQUEST_SEED) {
            if (event.data.data.status == "HAS_SEED") {
              this.currentWalletStage = this.walletStages.PINCODE;
              this.encryptedSeedData = event.data.data.pinEncryptedSeed;
            } else if (event.data.data.status == "NO_SEED") {
              if (localStorage.getItem("Vault") != null) {
                //Get the vault where the encrypted seed is stored.
                let v = localStorage.getItem("Vault") || '{}';
                this.currentWalletStage = this.walletStages.PASSWORD_AND_PINCODE;
                this.encryptedSeedData = v;
              } else {
                this.currentWalletStage = this.walletStages.ONBOARDING;
                return;
              }
            }
          }
        });
      }
    };
  }

  initWallet(seedPhrase) {
    this.wallet = new src_metro_backend_walletState__WEBPACK_IMPORTED_MODULE_1__.WalletState(seedPhrase); //Set the initial current address.

    this.currentWalletAddress = this.wallet.getCurrentAddress();
    this.updateAvaxAmount();
    this.encryptedSeedData = '';
    this.currentWalletStage = this.walletStages.UNLOCKED;
  }

  openMetroWeb() {
    var _a;

    (_a = window.open('metroWeb/index.html', '_blank')) === null || _a === void 0 ? void 0 : _a.focus();
  }

  openTxInExplorer(txHash) {
    if (this.wallet != null) {
      this.wallet.openTxInExplorer(txHash);
    }
  }

  deleteWallet() {
    var _a, _b;

    (_a = this.wallet) === null || _a === void 0 ? void 0 : _a.deleteWallet();
    (_b = navigator.serviceWorker.controller) === null || _b === void 0 ? void 0 : _b.postMessage({
      method: metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_2__.MetroRPC.DELETE_VAULT
    });
    this.currentWalletStage = this.walletStages.ONBOARDING;
  }

  updateChainID(chainID) {
    if (this.wallet != null) {
      this.wallet.updateChainID(chainID);
    }
  }

  clearTxHistory() {
    if (this.wallet != null) {
      this.wallet.resetTxHistory();
    }
  }

  openAccountSettingsModal() {
    this.currentModal.modal = this.modals.ACCOUNT_SETTINGS;
    this.isModalEnabled = true;
  }

  openConnectionModal(tabId) {
    if (tabId in this.currentConnections) {
      this.selectedPort = this.currentConnections[tabId];
    }

    this.currentModal.modal = this.modals.VIEW_CONNECTION_INFO;
    this.isModalEnabled = true;
  }

  deleteConnection(tabId) {
    var _a;

    if (tabId in this.currentConnections) {
      this.selectedPort = null;
      (_a = navigator.serviceWorker.controller) === null || _a === void 0 ? void 0 : _a.postMessage({
        method: metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_2__.MetroRPC.DELETE_PORT,
        tabId: tabId
      });
      delete this.currentConnections[tabId];
      this.arrayOfConnections = Object.values(this.currentConnections);
    }

    this.isModalEnabled = false;
    this.currentModal.modal = this.modals.NONE;
  } //Sets the current tab.


  setTab(tab) {
    this.tabs.tab = tab;
  } //Toggles the current popup, to disable/hide the popup simply set it to 'CurrentPopups.NONE', or
  //call togglePopup with the popup that is already enabled.


  setPopup(popup) {
    this.popups.popup = popup;
  }

  updateAvaxAmount() {
    var _this = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      yield (_a = _this.wallet) === null || _a === void 0 ? void 0 : _a.updateDjtxBalance();
    })();
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = false;
  }

  nextAccount() {
    if (this.wallet != null) {
      this.wallet.changeAccount(this.wallet.currentWallet.index + 1);
      this.currentWalletAddress = this.wallet.currentWallet.wallet.address;
    }
  }

  previousAccount() {
    if (this.wallet != null && this.wallet.currentWallet.index > 0) {
      this.wallet.changeAccount(this.wallet.currentWallet.index - 1);
      this.currentWalletAddress = this.wallet.currentWallet.wallet.address;
    }
  }

  addNewToken() {
    this.currentModal.modal = this.modals.ADD_TOKEN;
    this.isModalEnabled = true;
  }

  closeModal() {
    this.isModalEnabled = false;
    this.currentModal.modal = this.modals.NONE;
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 5,
  vars: 4,
  consts: [[4, "ngIf"], [2, "position", "absolute", "width", "100vw"], [3, "showModal", "currentModal", "connectionInfoPort", "currentAddressIndex", "currentAccountAddress", "djtxBalance", "closeModalButton", "deleteConnectionEvent", "switchToPreviousAccount", "switchToNextAccount", 4, "ngIf"], [3, "popupState", "showPopup", "tokenArray", "currentDjtxAmount", "walletState", "connectedPorts", "closePopup", "openConnectionModalEvent"], [3, "currentAddress", "djtxAmount", "tokenArray", "currentAddressIndex", "txHistory", "isSearchingTokens", "sendButtonClick", "connectButtonClick", "addTokenButtonClick", "openAccountSettings", "openTxHash"], [3, "tokenArray", "txHistory", "addTokenButtonClick", "openTxHash"], [3, "walletState", "setChainID", "clearTransactionHistory", "deleteWallet"], [3, "showModal", "currentModal", "connectionInfoPort", "currentAddressIndex", "currentAccountAddress", "djtxBalance", "closeModalButton", "deleteConnectionEvent", "switchToPreviousAccount", "switchToNextAccount"], [3, "seedStage", "encryptedSeed", "onSeedDecrypt"], [1, "container_flex"], [2, "margin-top", "20px"], ["id", "svg", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "170", "height", "170", "viewBox", "0, 0, 400,398.96907216494844", 1, "tabbys_style"], ["id", "svgg"], ["id", "path0", "d", "M248.557 29.682 C 234.420 33.414,230.241 51.149,241.308 60.444 C 251.670 69.147,267.741 62.232,269.282 48.407 C 270.594 36.642,259.649 26.754,248.557 29.682 M53.266 41.875 C 44.510 43.338,41.533 54.105,48.147 60.388 C 55.199 67.087,66.392 62.674,66.392 53.196 C 66.392 46.295,59.969 40.756,53.266 41.875 M129.278 104.039 C 88.755 110.073,74.292 112.298,72.990 112.698 C 63.637 115.571,56.835 123.717,55.040 134.196 C 54.523 137.215,54.524 141.622,55.058 208.866 C 55.481 262.240,55.445 260.720,56.379 264.290 C 58.545 272.578,64.222 279.240,71.443 281.969 C 72.642 282.422,177.276 309.275,181.134 310.120 C 184.826 310.929,181.901 311.313,254.639 300.457 C 291.211 294.999,321.644 290.380,322.268 290.192 C 331.490 287.414,338.878 276.158,340.392 262.577 C 340.720 259.635,341.562 138.470,341.277 135.258 C 340.027 121.178,332.662 110.076,323.084 107.834 C 320.925 107.328,189.106 95.858,185.876 95.895 C 184.313 95.912,170.635 97.881,129.278 104.039 M255.829 118.660 C 291.564 121.067,312.867 122.581,313.538 122.761 C 321.323 124.847,327.487 134.461,328.203 145.634 C 328.504 150.328,327.698 252.251,327.342 254.478 C 325.585 265.484,319.630 274.111,312.371 276.166 C 310.059 276.821,201.396 290.787,198.557 290.794 C 188.734 290.820,180.617 282.805,178.227 270.722 C 177.659 267.846,177.204 144.803,177.743 139.837 C 179.184 126.579,187.449 116.247,197.551 115.075 C 198.388 114.978,199.097 114.887,199.127 114.872 C 199.158 114.857,224.673 116.562,255.829 118.660 M221.938 148.832 C 220.114 150.157,217.400 153.605,216.593 155.621 C 216.084 156.895,216.237 157.312,217.526 158.156 C 220.555 160.140,231.159 166.642,231.238 166.563 C 231.287 166.514,229.554 162.372,227.387 157.360 C 223.081 147.403,223.342 147.812,221.938 148.832 M292.907 151.598 C 292.638 152.193,290.876 155.870,288.992 159.768 C 285.739 166.500,285.420 167.216,285.675 167.216 C 285.734 167.216,288.889 165.387,292.685 163.152 C 299.356 159.224,299.587 159.066,299.583 158.461 C 299.571 156.920,297.549 153.439,295.590 151.587 C 294.059 150.139,293.566 150.141,292.907 151.598 M222.784 169.147 C 221.831 169.586,221.781 169.659,213.775 182.268 C 205.932 194.620,205.657 195.117,205.832 196.666 C 206.066 198.741,205.732 198.608,220.722 202.574 C 238.387 207.247,239.731 207.322,239.314 203.622 C 239.199 202.608,228.834 171.644,228.196 170.409 C 227.455 168.976,224.600 168.310,222.784 169.147 M289.723 169.464 C 287.173 169.647,288.112 167.560,281.928 186.804 C 275.869 205.657,275.877 204.726,281.769 204.611 C 282.878 204.589,304.881 196.712,305.466 196.127 C 307.128 194.465,306.904 193.890,299.709 181.340 C 292.255 168.339,293.004 169.229,289.723 169.464 M259.117 227.451 C 258.921 227.561,258.581 228.002,258.362 228.431 C 257.985 229.170,257.797 229.995,257.015 234.330 C 256.108 239.364,253.539 241.785,249.186 241.710 C 245.987 241.655,245.474 242.062,246.817 243.591 C 248.814 245.866,252.488 245.700,257.423 243.110 L 259.691 241.920 261.697 242.661 C 263.399 243.289,263.705 243.471,263.708 243.855 C 263.713 244.460,264.706 247.582,264.939 247.726 C 265.188 247.880,265.857 246.906,266.612 245.292 C 267.180 244.078,267.303 243.948,267.999 243.821 C 270.077 243.445,272.371 241.774,272.371 240.637 C 272.371 239.626,271.975 239.504,270.258 239.986 C 265.203 241.404,262.759 239.250,261.645 232.397 C 261.042 228.688,260.122 226.889,259.117 227.451 M334.124 333.617 C 318.954 335.971,313.434 354.583,324.698 365.400 C 336.421 376.658,355.215 369.770,356.024 353.918 C 356.628 342.088,345.573 331.841,334.124 333.617 M134.490 336.400 C 126.300 338.605,123.414 348.880,129.319 354.804 C 137.079 362.588,150.114 354.783,147.313 344.029 C 145.856 338.433,139.961 334.926,134.490 336.400 ", "stroke", "none", "fill", "#fffff", "fill-rule", "evenodd"], [1, "header_text", 2, "margin-bottom", "3px", "font-family", "Calibre"], [2, "margin-top", "0px", "font-family", "Calibre"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AppComponent_div_0_Template, 4, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AppComponent_div_3_Template, 9, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentWalletStage == ctx.walletStages.UNLOCKED);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentWalletStage == ctx.walletStages.PINCODE || ctx.currentWalletStage == ctx.walletStages.PASSWORD_AND_PINCODE);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentWalletStage == ctx.walletStages.ONBOARDING);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentWalletStage == ctx.walletStages.NONE);
    }
  },
  styles: [".tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 120px;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -60px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n[_ngcontent-%COMP%]::selection {\n  background: var(--main_color_1);\n}\n\n.container_flex[_ngcontent-%COMP%] {\n  margin: 0px;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  background-size: cover;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  filter: opacity(1);\n  transition-duration: 270ms;\n  visibility: visible;\n}\n\n.tabbys_style[_ngcontent-%COMP%] {\n  fill: var(--main_color_1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFHQSxrQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0FBREY7O0FBR0E7RUFDRSwrQkFBQTtBQUFGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAxMjBweDtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiBcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW5fY29sb3JfMSk7XG59XG5cblxuLmNvbnRhaW5lcl9mbGV4IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBvcGFjaXR5KDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNzBtcztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnRhYmJ5c19zdHlsZSB7XG4gIGZpbGw6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gIC8vZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDVweCB2YXIoLS1tYWluX2NvbG9yXzEpKTtcbn1cblxuXG5cbiJdfQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('fadeOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      opacity: 0
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* <=> void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.sequence)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('125ms')]))])]
  }
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 27532);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ 76263);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 33252);
/* harmony import */ var _components_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/default-button/default-button.component */ 43775);
/* harmony import */ var _components_unlock_button_default_button2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/unlock-button/default-button2.component */ 16603);
/* harmony import */ var _components_send_tab_send_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/send-tab/send-tab.component */ 88624);
/* harmony import */ var _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/popup/popup.component */ 74082);
/* harmony import */ var _components_popup_send_popup_send_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/popup/send-popup/send-popup.component */ 54575);
/* harmony import */ var _components_input_fancy_input_fancy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/input-fancy/input-fancy.component */ 17427);
/* harmony import */ var _components_popup_connect_popup_connect_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/popup/connect-popup/connect-popup.component */ 98969);
/* harmony import */ var _components_toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/toggle-button/toggle-button.component */ 27619);
/* harmony import */ var _components_tx_module_tx_module_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tx-module/tx-module.component */ 54190);
/* harmony import */ var _components_assets_tab_assets_tab_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/assets-tab/assets-tab.component */ 13266);
/* harmony import */ var _components_modal_module_modal_module_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/modal-module/modal-module.component */ 42496);
/* harmony import */ var _components_modal_module_add_new_token_add_new_token_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/modal-module/add-new-token/add-new-token.component */ 11311);
/* harmony import */ var _components_modal_module_send_transaction_send_transaction_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/modal-module/send-transaction/send-transaction.component */ 59842);
/* harmony import */ var _components_modal_module_select_asset_select_asset_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/modal-module/select-asset/select-asset.component */ 40789);
/* harmony import */ var _components_onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/onboarding/onboarding.component */ 29090);
/* harmony import */ var _components_unlock_wallet_page_unlock_wallet_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/unlock-wallet-page/unlock-wallet-page.component */ 77774);
/* harmony import */ var _components_pincode_input_pincode_input_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pincode-input/pincode-input.component */ 78660);
/* harmony import */ var _components_fee_box_fee_box_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/fee-box/fee-box.component */ 57544);
/* harmony import */ var _tx_history_module_tx_history_module_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tx-history-module/tx-history-module.component */ 55764);
/* harmony import */ var _components_settings_tab_settings_tab_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/settings-tab/settings-tab.component */ 18440);
/* harmony import */ var _components_chain_id_selection_chain_id_selection_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/chain-id-selection/chain-id-selection.component */ 4477);
/* harmony import */ var _components_d_app_connection_module_d_app_connection_module_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/d-app-connection-module/d-app-connection-module.component */ 48298);
/* harmony import */ var _components_modal_module_view_connection_info_view_connection_info_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/modal-module/view-connection-info/view-connection-info.component */ 89023);
/* harmony import */ var _components_modal_module_account_settings_modal_account_settings_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/modal-module/account-settings-modal/account-settings-modal.component */ 30419);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ 93690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/router */ 73903);

































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent,
        _components_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_3__.DefaultButtonComponent,
        _components_unlock_button_default_button2_component__WEBPACK_IMPORTED_MODULE_4__.DefaultButton2Component,
        _components_send_tab_send_tab_component__WEBPACK_IMPORTED_MODULE_5__.SendTabComponent,
        _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_6__.PopupComponent,
        _components_popup_send_popup_send_popup_component__WEBPACK_IMPORTED_MODULE_7__.SendPopupComponent,
        _components_input_fancy_input_fancy_component__WEBPACK_IMPORTED_MODULE_8__.InputFancyComponent,
        _components_popup_connect_popup_connect_popup_component__WEBPACK_IMPORTED_MODULE_9__.ConnectPopupComponent,
        _components_toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_10__.ToggleButtonComponent,
        _components_tx_module_tx_module_component__WEBPACK_IMPORTED_MODULE_11__.TxModuleComponent,
        _components_assets_tab_assets_tab_component__WEBPACK_IMPORTED_MODULE_12__.AssetsTabComponent,
        _components_modal_module_modal_module_component__WEBPACK_IMPORTED_MODULE_13__.ModalModuleComponent,
        _components_modal_module_add_new_token_add_new_token_component__WEBPACK_IMPORTED_MODULE_14__.AddNewTokenComponent,
        _components_modal_module_send_transaction_send_transaction_component__WEBPACK_IMPORTED_MODULE_15__.SendTransactionComponent,
        _components_modal_module_select_asset_select_asset_component__WEBPACK_IMPORTED_MODULE_16__.SelectAssetComponent,
        _components_onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_17__.OnboardingComponent,
        _components_unlock_wallet_page_unlock_wallet_page_component__WEBPACK_IMPORTED_MODULE_18__.UnlockWalletPageComponent,
        _components_pincode_input_pincode_input_component__WEBPACK_IMPORTED_MODULE_19__.PincodeInputComponent,
        _components_fee_box_fee_box_component__WEBPACK_IMPORTED_MODULE_20__.FeeBoxComponent,
        _tx_history_module_tx_history_module_component__WEBPACK_IMPORTED_MODULE_21__.TxHistoryModuleComponent,
        _components_settings_tab_settings_tab_component__WEBPACK_IMPORTED_MODULE_22__.SettingsTabComponent,
        _components_chain_id_selection_chain_id_selection_component__WEBPACK_IMPORTED_MODULE_23__.ChainIDSelectionComponent,
        _components_d_app_connection_module_d_app_connection_module_component__WEBPACK_IMPORTED_MODULE_24__.DAppConnectionModuleComponent,
        _components_modal_module_view_connection_info_view_connection_info_component__WEBPACK_IMPORTED_MODULE_25__.ViewConnectionInfoComponent,
        _components_modal_module_account_settings_modal_account_settings_modal_component__WEBPACK_IMPORTED_MODULE_26__.AccountSettingsModalComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, _components_send_tab_send_tab_component__WEBPACK_IMPORTED_MODULE_5__.SendTabComponent,
    _components_assets_tab_assets_tab_component__WEBPACK_IMPORTED_MODULE_12__.AssetsTabComponent,
    _components_settings_tab_settings_tab_component__WEBPACK_IMPORTED_MODULE_22__.SettingsTabComponent,
    _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_6__.PopupComponent,
    _components_modal_module_modal_module_component__WEBPACK_IMPORTED_MODULE_13__.ModalModuleComponent,
    _components_unlock_wallet_page_unlock_wallet_page_component__WEBPACK_IMPORTED_MODULE_18__.UnlockWalletPageComponent,
    _components_onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_17__.OnboardingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_32__.RouterOutlet], []);


/***/ }),

/***/ 13266:
/*!***************************************************************!*\
  !*** ./src/app/components/assets-tab/assets-tab.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsTabComponent": () => (/* binding */ AssetsTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../default-button/default-button.component */ 43775);
/* harmony import */ var _tx_module_tx_module_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tx-module/tx-module.component */ 54190);
/* harmony import */ var _tx_history_module_tx_history_module_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tx-history-module/tx-history-module.component */ 55764);






function AssetsTabComponent_div_9_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-tx-module", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const token_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tokenInfo", token_r6);
} }
function AssetsTabComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AssetsTabComponent_div_9_div_2_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "app-default-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("buttonClick", function AssetsTabComponent_div_9_div_2_Template_app_default_button_buttonClick_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r7.addNewToken(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.tokenArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 100)("height", 28);
} }
function AssetsTabComponent_div_9_div_4__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "g", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssetsTabComponent_div_9_div_4_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No tokens found, You can Add tokens manually if I missed one! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssetsTabComponent_div_9_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-default-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("buttonClick", function AssetsTabComponent_div_9_div_4_div_3_Template_app_default_button_buttonClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r12.addNewToken(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 100)("height", 28);
} }
function AssetsTabComponent_div_9_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AssetsTabComponent_div_9_div_4__svg_svg_1_Template, 3, 0, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AssetsTabComponent_div_9_div_4_p_2_Template, 2, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AssetsTabComponent_div_9_div_4_div_3_Template, 2, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.tokenArray.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.tokenArray.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.tokenArray.length == 0);
} }
function AssetsTabComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AssetsTabComponent_div_9_div_2_Template, 4, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AssetsTabComponent_div_9_div_4_Template, 4, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.tokenArray != null && ctx_r0.tokenArray.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.tokenArray != null);
} }
function AssetsTabComponent_div_10_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-tx-history-module", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("moduleClick", function AssetsTabComponent_div_10_div_1_div_1_Template_app_tx_history_module_moduleClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r18.openTxInExplorer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tx_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("transaction", tx_r17);
} }
function AssetsTabComponent_div_10_div_1_div_2__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "g", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssetsTabComponent_div_10_div_1_div_2_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No past transactions recorded! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssetsTabComponent_div_10_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AssetsTabComponent_div_10_div_1_div_2__svg_svg_1_Template, 3, 0, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AssetsTabComponent_div_10_div_1_div_2_p_2_Template, 2, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.txHistory.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.txHistory.length == 0);
} }
function AssetsTabComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AssetsTabComponent_div_10_div_1_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AssetsTabComponent_div_10_div_1_div_2_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r14.txHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.txHistory != null && ctx_r14.txHistory.length == 0);
} }
function AssetsTabComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AssetsTabComponent_div_10_div_1_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.txHistory != null);
} }
function AssetsTabComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "g", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " NFT-View Coming Soon... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
var AssetTabs;
(function (AssetTabs) {
    AssetTabs[AssetTabs["History"] = 0] = "History";
    AssetTabs[AssetTabs["TokenList"] = 1] = "TokenList";
    AssetTabs[AssetTabs["NFTList"] = 2] = "NFTList";
})(AssetTabs || (AssetTabs = {}));
class AssetsTabComponent {
    constructor() {
        this.isEnabled = false;
        this.assetTabs = AssetTabs;
        this.currentAssetTab = this.assetTabs.TokenList;
        this.djtxAmount = "0.00";
        this.tokenArray = null;
        this.txHistory = null;
        this.addTokenButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.openTxHash = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.isHistoryTabEnabled = false;
    }
    ngOnInit() {
    }
    addNewToken() {
        this.addTokenButtonClick.emit();
    }
    openTxInExplorer(txHash) {
        this.openTxHash.emit(txHash);
    }
    openDashboard() {
        var _a;
        (_a = window.open('metroWeb/index.html', '_blank')) === null || _a === void 0 ? void 0 : _a.focus();
    }
}
AssetsTabComponent.ɵfac = function AssetsTabComponent_Factory(t) { return new (t || AssetsTabComponent)(); };
AssetsTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AssetsTabComponent, selectors: [["app-assets-tab"]], inputs: { isEnabled: "isEnabled", djtxAmount: "djtxAmount", tokenArray: "tokenArray", txHistory: "txHistory" }, outputs: { addTokenButtonClick: "addTokenButtonClick", openTxHash: "openTxHash" }, decls: 14, vars: 8, consts: [[1, "container_flex", 2, "height", "fit-content"], [1, "shadow_box", "darker_background", 2, "display", "flex", "height", "390px", "justify-content", "center", "flex-direction", "column"], [1, "", 2, "justify-content", "center", "padding", "7px", "padding-bottom", "5px", "align-self", "center", "display", "flex", "width", "118px", "justify-content", "space-evenly", "border-top-left-radius", "5px", "border-top-right-radius", "5px"], [1, "svg_button", 2, "font-family", "fonticon_awesome", "font-size", "20px", "vertical-align", "baseline", 3, "ngClass", "click"], ["class", "item_list", 4, "ngIf"], [1, "shadow_box", 2, "display", "flex", "height", "50px", "justify-content", "space-evenly", "align-items", "center"], ["text", "Metro Dashboard", 3, "height", "width", "click"], [1, "item_list"], [4, "ngIf"], [2, "display", "flex", "margin", "10px", "margin-top", "25px", "justify-content", "center", "align-items", "center"], [4, "ngFor", "ngForOf"], [2, "align-items", "center", "justify-content", "center", "margin-top", "12px"], ["text", "Add Token", 2, "padding", "15px", 3, "width", "height", "buttonClick"], [3, "tokenInfo"], ["style", "filter: drop-shadow(0px 0px 1px rgb(15, 15, 15));", "id", "svg", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "80", "height", "80", "viewBox", "0, 0, 400,398.96907216494844", "version", "1.1", 4, "ngIf"], ["style", "margin: 4px; font-weight: bold; margin-bottom: 10px; margin-top: 0px; font-size: 13px; color: rgb(15, 15, 15);", 4, "ngIf"], ["style", " align-items: center; justify-content: center;", 4, "ngIf"], ["id", "svg", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "80", "height", "80", "viewBox", "0, 0, 400,398.96907216494844", "version", "1.1", 2, "filter", "drop-shadow(0px 0px 1px rgb(15, 15, 15))"], ["id", "svgg"], ["id", "path0", "d", "M58.969 43.531 C 36.323 45.843,18.644 62.421,14.176 85.537 L 13.711 87.938 13.649 192.990 C 13.584 304.128,13.551 300.121,14.565 305.142 C 18.835 326.283,36.207 342.285,58.041 345.190 C 61.105 345.597,339.720 345.597,342.784 345.190 C 365.917 342.112,383.149 325.039,386.737 301.640 C 387.173 298.795,387.443 98.048,387.020 91.309 C 385.491 66.968,368.774 48.310,344.522 43.873 L 341.959 43.404 201.340 43.378 C 123.162 43.364,59.943 43.432,58.969 43.531 M320.044 66.918 C 339.940 69.658,355.256 85.199,357.722 105.149 C 358.025 107.597,358.024 281.277,357.721 283.717 C 355.192 304.104,339.224 319.777,318.660 322.059 C 316.116 322.341,84.526 322.343,81.959 322.061 C 61.303 319.790,45.189 303.760,42.891 283.196 C 42.510 279.781,42.612 107.765,42.997 104.804 C 45.537 85.284,60.457 70.005,79.897 67.015 C 83.428 66.472,316.123 66.378,320.044 66.918 M124.055 117.990 C 119.331 123.003,115.205 127.927,115.304 128.433 C 115.434 129.096,138.322 139.126,140.155 139.323 L 141.237 139.439 141.237 138.817 C 141.237 137.517,140.546 136.313,132.825 124.175 C 129.705 119.271,127.035 115.258,126.891 115.258 C 126.747 115.258,125.470 116.487,124.055 117.990 M267.437 124.794 C 257.565 140.314,257.420 140.908,264.178 138.157 C 266.830 137.077,285.313 128.776,285.516 128.574 C 285.925 128.164,274.494 115.258,273.722 115.258 C 273.601 115.258,270.773 119.549,267.437 124.794 M131.087 145.484 C 130.443 145.681,129.726 146.150,128.978 146.861 C 127.338 148.421,100.281 181.376,99.757 182.453 C 98.425 185.187,99.604 187.757,102.644 188.743 C 105.274 189.597,152.966 200.264,154.227 200.280 C 156.699 200.312,157.806 199.232,157.684 196.907 C 157.596 195.239,137.308 149.152,135.743 147.066 C 134.666 145.631,132.740 144.976,131.087 145.484 M267.470 145.357 C 266.541 145.577,265.290 146.482,264.666 147.388 C 264.170 148.106,244.425 192.280,243.382 195.005 C 242.149 198.224,243.335 200.308,246.380 200.278 C 248.176 200.260,297.585 189.049,298.969 188.345 C 301.941 186.834,302.288 183.861,299.844 180.837 C 295.226 175.122,272.124 147.177,271.654 146.737 C 270.414 145.579,268.795 145.044,267.470 145.357 M199.083 235.527 C 198.782 236.142,198.242 238.063,197.852 239.909 C 196.598 245.842,195.677 247.850,192.990 250.515 C 188.682 254.788,183.902 256.152,177.076 255.056 C 172.205 254.274,171.365 256.258,175.615 258.506 C 180.666 261.178,186.802 260.905,195.696 257.614 C 199.799 256.095,200.012 256.094,204.021 257.574 C 205.722 258.203,207.676 258.874,208.363 259.065 L 209.612 259.414 209.937 260.799 C 210.285 262.281,211.362 264.998,211.863 265.659 C 212.340 266.290,214.868 263.561,215.987 261.208 L 216.344 260.456 218.320 260.208 C 222.923 259.628,226.969 257.473,226.765 255.709 C 226.643 254.660,225.947 254.551,222.623 255.061 C 215.739 256.118,211.028 254.740,206.692 250.403 C 204.152 247.862,203.171 245.604,201.773 239.082 C 200.839 234.725,200.011 233.630,199.083 235.527 ", "stroke", "none", "fill", "#181818", "fill-rule", "evenodd"], [2, "margin", "4px", "font-weight", "bold", "margin-bottom", "10px", "margin-top", "0px", "font-size", "13px", "color", "rgb(15, 15, 15)"], [2, "align-items", "center", "justify-content", "center"], ["text", "Add Token", 2, "margin", "5px", 3, "width", "height", "buttonClick"], ["style", "margin-top: 25px;", 4, "ngIf"], [3, "transaction", "moduleClick"], [2, "margin-top", "25px"], [2, "display", "flex", "flex-direction", "column", "align-items", "center", "margin-top", "25px"]], template: function AssetsTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetsTabComponent_Template_div_click_3_listener() { return ctx.currentAssetTab = ctx.assetTabs.TokenList; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \uF51E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetsTabComponent_Template_div_click_5_listener() { return ctx.currentAssetTab = ctx.assetTabs.History; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " \uF1DA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetsTabComponent_Template_div_click_7_listener() { return ctx.currentAssetTab = ctx.assetTabs.NFTList; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " \uF009 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AssetsTabComponent_div_9_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AssetsTabComponent_div_10_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AssetsTabComponent_div_11_Template, 7, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "app-default-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetsTabComponent_Template_app_default_button_click_13_listener() { return ctx.openDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.currentAssetTab == ctx.assetTabs.TokenList ? "svg_button_selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.currentAssetTab == ctx.assetTabs.History ? "svg_button_selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.currentAssetTab == ctx.assetTabs.NFTList ? "svg_button_selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentAssetTab == ctx.assetTabs.TokenList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentAssetTab == ctx.assetTabs.History);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentAssetTab == ctx.assetTabs.NFTList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("height", 35)("width", 150);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__.DefaultButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _tx_module_tx_module_component__WEBPACK_IMPORTED_MODULE_1__.TxModuleComponent, _tx_history_module_tx_history_module_component__WEBPACK_IMPORTED_MODULE_2__.TxHistoryModuleComponent], styles: [".background[_ngcontent-%COMP%] {\n  background-color: var(--main_background_color);\n  border-radius: 3px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.container_flex[_ngcontent-%COMP%] {\n  margin: 0px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-size: cover;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n}\n\n.flex_row[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n\n.shadow_box[_ngcontent-%COMP%] {\n  background-color: var(--darker_background_color);\n  position: relative;\n  display: flex;\n  overflow-wrap: normal;\n  border-radius: 8px;\n  box-shadow: 0px 0px var(--shadow_size) 1px var(--shadow_color) inset;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  box-sizing: border-box;\n  width: 92%;\n  min-height: 124px;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.shadow_box2[_ngcontent-%COMP%] {\n  background-color: var(--darker_background_color);\n  position: relative;\n  display: flex;\n  overflow-wrap: normal;\n  border-radius: 8px;\n  box-shadow: 0px 0px var(--shadow_size) 1px var(--shadow_color) inset;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  box-sizing: border-box;\n  width: 92%;\n  max-height: 124px;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.darker_background[_ngcontent-%COMP%] {\n  box-shadow: none;\n  background-color: #121212;\n}\n\n.inner_flex_container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n  padding: 2px;\n  background-size: cover;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  align-items: flex-start;\n}\n\n.item_list[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  border-radius: 0px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  border-width: 0px;\n  background-color: var(--darker_background_color);\n  height: 100%;\n  width: 100%;\n  box-shadow: 0px 0px var(--shadow_size) 1px var(--shadow_color) inset;\n  justify-content: center;\n  overflow: hidden;\n  overflow-y: scroll;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.svg_button[_ngcontent-%COMP%] {\n  fill: #dddddd;\n  color: #dddddd;\n  transition-duration: 220px;\n}\n\n.svg_button[_ngcontent-%COMP%]:hover {\n  transition-duration: 220px;\n  fill: var(--main_color_1);\n  color: var(--main_color_1);\n  filter: drop-shadow(0px 0px 5px var(--main_color_1));\n  cursor: pointer;\n}\n\n.svg_button[_ngcontent-%COMP%]:active {\n  transition-duration: 220px;\n  fill: #b4003c;\n  color: #b4003c;\n  filter: drop-shadow(0px 0px 5px #b4003c);\n  cursor: pointer;\n}\n\n.svg_button_selected[_ngcontent-%COMP%] {\n  transition-duration: 220px;\n  fill: var(--main_color_1);\n  color: var(--main_color_1);\n  filter: drop-shadow(0px 0px 5px var(--main_color_1));\n}\n\n*[_ngcontent-%COMP%] {\n  scrollbar-width: 0px;\n  scrollbar-color: rgba(34, 34, 34, 0) rgba(34, 34, 34, 0);\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(34, 34, 34, 0);\n  border-radius: 0px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(34, 34, 34, 0);\n  border-radius: 0px;\n  border: 0px solid rgba(34, 34, 34, 0);\n}\n\n[_ngcontent-%COMP%]::selection {\n  background: var(--main_color_1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9FQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBSUEsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9FQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBSUEsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0RBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9FQUFBO0VBTUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUlBLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBTEo7O0FBUUE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvREFBQTtFQUNBLGVBQUE7QUFMSjs7QUFRQTtFQUNJLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7QUFMSjs7QUFRQTtFQUNJLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9EQUFBO0FBTEo7O0FBUUE7RUFDSSxvQkFBQTtFQUNBLHdEQUFBO0FBTEo7O0FBUUE7RUFDSSxVQUFBO0FBTEo7O0FBUUE7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0FBTEo7O0FBUUE7RUFDSSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUFMSjs7QUFRQTtFQUNJLCtCQUFBO0FBTEoiLCJmaWxlIjoiYXNzZXRzLXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluX2JhY2tncm91bmRfY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4uY29udGFpbmVyX2ZsZXgge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmZsZXhfcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uc2hhZG93X2JveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyX2JhY2tncm91bmRfY29sb3IpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCB2YXIoLS1zaGFkb3dfc2l6ZSkgMXB4IHZhcigtLXNoYWRvd19jb2xvcikgaW5zZXQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiA5MiU7XG4gICAgbWluLWhlaWdodDogMTI0cHg7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc2hhZG93X2JveDIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlcl9iYWNrZ3JvdW5kX2NvbG9yKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggdmFyKC0tc2hhZG93X3NpemUpIDFweCB2YXIoLS1zaGFkb3dfY29sb3IpIGluc2V0O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogOTIlO1xuICAgIG1heC1oZWlnaHQ6IDEyNHB4O1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmRhcmtlcl9iYWNrZ3JvdW5kIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTgsIDE4KTtcbn1cblxuLmlubmVyX2ZsZXhfY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uaXRlbV9saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyX2JhY2tncm91bmRfY29sb3IpO1xuICAgIC8vYm94LXNoYWRvdzogMHB4IDBweCB2YXIoLS1zaGFkb3dfc2l6ZSkgIHZhcigtLXNoYWRvd19jb2xvcik7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggdmFyKC0tc2hhZG93X3NpemUpIDFweCB2YXIoLS1zaGFkb3dfY29sb3IpIGluc2V0O1xuICAgIC8vYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluX2JhY2tncm91bmRfY29sb3IpO1xuICAgIC8vYm9yZGVyLXRvcC13aWR0aDogMHB4O1xuICAgIC8vYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc3ZnX2J1dHRvbiB7XG4gICAgZmlsbDogcmdiKDIyMSwgMjIxLCAyMjEpO1xuICAgIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjIwcHg7XG59XG5cbi5zdmdfYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMjBweDtcbiAgICBmaWxsOiB2YXIoLS1tYWluX2NvbG9yXzEpO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluX2NvbG9yXzEpO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCA1cHggdmFyKC0tbWFpbl9jb2xvcl8xKSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3ZnX2J1dHRvbjphY3RpdmUge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIyMHB4O1xuICAgIGZpbGw6IHJnYigxODAsIDAsIDYwKTtcbiAgICBjb2xvcjogcmdiKDE4MCwgMCwgNjApO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCA1cHggcmdiKDE4MCwgMCwgNjApKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdmdfYnV0dG9uX3NlbGVjdGVkIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMjBweDtcbiAgICBmaWxsOiB2YXIoLS1tYWluX2NvbG9yXzEpO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluX2NvbG9yXzEpO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCA1cHggdmFyKC0tbWFpbl9jb2xvcl8xKSk7XG59XG5cbioge1xuICAgIHNjcm9sbGJhci13aWR0aDogMHB4O1xuICAgIHNjcm9sbGJhci1jb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAwKSByZ2JhKDM0LCAzNCwgMzQsIDApO1xufVxuXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDBweDtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsIDM0LCAzNCwgMCk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAwKTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgzNCwgMzQsIDM0LCAwKTtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW5fY29sb3JfMSk7XG59Il19 */"] });


/***/ }),

/***/ 4477:
/*!*******************************************************************************!*\
  !*** ./src/app/components/chain-id-selection/chain-id-selection.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChainIDSelectionComponent": () => (/* binding */ ChainIDSelectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 48750);



class ChainIDSelectionComponent {
    constructor() {
        this.currentChainID = 0;
        this.changeChainID = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.customChainID = 0;
    }
    ngOnInit() {
    }
    selectNetworkRaw(chainID) {
        this.changeChainID.emit(chainID);
        console.log("Switched to: " + chainID);
    }
    selectNetwork(event) {
        this.changeChainID.emit(Number(event.target.value));
        console.log("Switched to: " + Number(event.target.value));
    }
    newCustomNetwork(event) {
        this.selectNetwork(event);
    }
}
ChainIDSelectionComponent.ɵfac = function ChainIDSelectionComponent_Factory(t) { return new (t || ChainIDSelectionComponent)(); };
ChainIDSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChainIDSelectionComponent, selectors: [["app-chain-id-selection"]], inputs: { currentChainID: "currentChainID" }, outputs: { changeChainID: "changeChainID" }, decls: 13, vars: 4, consts: [[1, "container_flex", 2, "flex-direction", "column", "width", "auto", "height", "auto", "justify-content", "space-evenly"], [2, "margin", "4px"], [1, "container_flex", 2, "flex-direction", "row", "padding-left", "8px"], [1, "container_flex", 2, "flex-direction", "column", "width", "auto", "height", "auto"], [1, "container_flex", "network_box", 2, "height", "35px", "width", "85px", "font-weight", "bold", 3, "ngClass", "click"], ["type", "number", "placeholder", "Custom", 1, "network_input_box", 3, "blur", "keyup"]], template: function ChainIDSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChainIDSelectionComponent_Template_div_click_5_listener() { return ctx.selectNetworkRaw(43114); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Main-Net ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChainIDSelectionComponent_Template_div_click_8_listener() { return ctx.selectNetworkRaw(43113); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Test-Net ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChainIDSelectionComponent_Template_div_click_11_listener($event) { return ctx.newCustomNetwork($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ChainIDSelectionComponent_Template_input_blur_12_listener($event) { return ctx.newCustomNetwork($event); })("keyup", function ChainIDSelectionComponent_Template_input_keyup_12_listener($event) { return ctx.newCustomNetwork($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current ChainID: ", ctx.currentChainID, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentChainID == 43114 ? "selected_box" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentChainID == 43113 ? "selected_box" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentChainID != 43113 && ctx.currentChainID != 43114 ? "selected_box" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".container_flex[_ngcontent-%COMP%] {\n  margin: 0px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-size: cover;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n}\n\n.network_box[_ngcontent-%COMP%] {\n  margin-right: 7px;\n  padding: 3px;\n  border-radius: 7px;\n  border-width: 2px;\n  border-color: var(--darker_background_color);\n  background-color: #0f0f0f;\n  box-shadow: -2px 2px 0px var(--darker_background_color);\n  border-style: solid;\n  transition-duration: 120ms;\n}\n\n.network_box[_ngcontent-%COMP%]:hover {\n  border-color: var(--main_color_1);\n  box-shadow: -2px 2px 0px var(--main_color_1);\n  cursor: pointer;\n  transition-duration: 120ms;\n}\n\n.selected_box[_ngcontent-%COMP%] {\n  border-color: var(--main_color_1);\n  box-shadow: 0px 0px 0px var(--main_color_1);\n  transform: translate(-2px, 2px);\n  transition-duration: 120ms;\n}\n\n.selected_box[_ngcontent-%COMP%]:hover {\n  border-color: var(--main_color_1);\n  box-shadow: 0px 0px 0px var(--main_color_1);\n  transform: translate(-2px, 2px);\n  transition-duration: 120ms;\n}\n\ninput[_ngcontent-%COMP%] {\n  margin: 8px;\n  background-color: rgba(0, 0, 0, 0);\n  border-color: rgba(0, 0, 0, 0);\n  border-style: none;\n  outline: none;\n  font-family: Calibre;\n  box-shadow: 0px 0px 5px inset var(--main_background_color);\n  border-radius: 2px;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  color: white;\n  font-weight: bold;\n  transition-duration: 110ms;\n}\n\ninput[_ngcontent-%COMP%]:hover {\n  transition-duration: 110ms;\n  background-color: rgba(0, 0, 0, 0);\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  transition-duration: 110ms;\n  transition-duration: 110ms;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  transition-duration: 110ms;\n  -webkit-appearance: none;\n}\n\ninput[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.faulty_value[_ngcontent-%COMP%] {\n  color: #ff004c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYWluLWlkLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EseUJBQUE7RUFDQSx1REFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0VBQ0EsMkNBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLDBEQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTs7RUFFSSwwQkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImNoYWluLWlkLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfZmxleCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubmV0d29ya19ib3gge1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrZXJfYmFja2dyb3VuZF9jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xuICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IDBweCB2YXIoLS1kYXJrZXJfYmFja2dyb3VuZF9jb2xvcik7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjBtcztcbn1cblxuLm5ldHdvcmtfYm94OmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgYm94LXNoYWRvdzogLTJweCAycHggMHB4IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEyMG1zO1xufVxuXG4uc2VsZWN0ZWRfYm94IHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAycHgpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEyMG1zO1xufVxuXG4uc2VsZWN0ZWRfYm94OmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAycHgpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEyMG1zO1xufVxuXG5pbnB1dCB7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IENhbGlicmU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggaW5zZXQgdmFyKC0tbWFpbl9iYWNrZ3JvdW5kX2NvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTEwbXM7XG59XG5cbmlucHV0OmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMTBtcztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTEwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTEwbXM7XG59XG5cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDExMG1zO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4uZmF1bHR5X3ZhbHVlIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgNzYpO1xufSJdfQ== */"] });


/***/ }),

/***/ 48298:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/d-app-connection-module/d-app-connection-module.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DAppConnectionModuleComponent": () => (/* binding */ DAppConnectionModuleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);


class DAppConnectionModuleComponent {
    constructor() {
        this.url = '';
        this.siteFavicon = '';
        this.tabId = 0;
        this.moduleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    clickModule() {
        this.moduleClick.emit(this.tabId);
    }
}
DAppConnectionModuleComponent.ɵfac = function DAppConnectionModuleComponent_Factory(t) { return new (t || DAppConnectionModuleComponent)(); };
DAppConnectionModuleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DAppConnectionModuleComponent, selectors: [["app-d-app-connection-module"]], inputs: { url: "url", siteFavicon: "siteFavicon", tabId: "tabId" }, outputs: { moduleClick: "moduleClick" }, decls: 4, vars: 2, consts: [[1, "module_box", 3, "click"], [1, "module_icon", 3, "src"], [1, "left_label"]], template: function DAppConnectionModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DAppConnectionModuleComponent_Template_div_click_0_listener() { return ctx.clickModule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.siteFavicon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.url, " ");
    } }, styles: [".module_box[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  background-color: var(--main_background_color);\n  margin: 8px;\n  padding: 5px;\n  height: 40px;\n  width: 265px;\n  border-radius: 8px;\n  align-items: center;\n  transition-duration: 180ms;\n}\n\n.module_box[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 6px #0f0f0f;\n  transition-duration: 180ms;\n  cursor: pointer;\n  color: var(--main_color_1);\n  text-shadow: 0px 0px 5px var(--main_color_1);\n}\n\n.left_label[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.right_label[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-size: 13px;\n  flex-grow: 1;\n  justify-self: flex-end;\n  text-align: right;\n}\n\n.module_icon[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-right: 8px;\n  height: 32px;\n  width: 32px;\n  border-radius: 8px;\n  justify-self: flex-start;\n  background: #333333;\n  box-shadow: 0px 0px 8px inset #0a0a0a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImQtYXBwLWNvbm5lY3Rpb24tbW9kdWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBRUEsOENBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUlBLFlBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUVBLDBCQUFBO0FBTko7O0FBU0E7RUFHSSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsNENBQUE7QUFSSjs7QUFXQTtFQUNJLGVBQUE7QUFSSjs7QUFVQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFQSjs7QUFVQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsd0JBQUE7RUFFQSxtQkFBQTtFQUNBLHFDQUFBO0FBVkoiLCJmaWxlIjoiZC1hcHAtY29ubmVjdGlvbi1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kdWxlX2JveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluX2JhY2tncm91bmRfY29sb3IpO1xuXG4gICAgbWFyZ2luOiA4cHg7XG4gICAgcGFkZGluZzogNXB4O1xuXG5cblxuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMjY1cHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDE4MG1zO1xufVxuXG4ubW9kdWxlX2JveDpob3ZlcntcbiAgICBcbiAgICAvL2JveC1zaGFkb3c6IC0ycHggMHB4IDBweCB2YXIoLS1tYWluX2NvbG9yXzEpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYigxNSwgMTUsIDE1KTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxODBtcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLW1haW5fY29sb3JfMSk7XG59XG5cbi5sZWZ0X2xhYmVse1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5yaWdodF9sYWJlbHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tb2R1bGVfaWNvbntcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuXG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcblxuICAgIGJhY2tncm91bmQ6IHJnYig1MSwgNTEsIDUxKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCBpbnNldCByZ2IoMTAsIDEwLCAxMCk7XG59Il19 */"] });


/***/ }),

/***/ 43775:
/*!***********************************************************************!*\
  !*** ./src/app/components/default-button/default-button.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultButtonComponent": () => (/* binding */ DefaultButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);


class DefaultButtonComponent {
    constructor() {
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.text = "Button";
        this.height = 32;
        this.width = 100;
    }
    ngOnInit() {
    }
    onClick() {
        this.buttonClick.emit();
    }
}
DefaultButtonComponent.ɵfac = function DefaultButtonComponent_Factory(t) { return new (t || DefaultButtonComponent)(); };
DefaultButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultButtonComponent, selectors: [["app-default-button"]], inputs: { text: "text", height: "height", width: "width" }, outputs: { buttonClick: "buttonClick" }, decls: 2, vars: 5, consts: [[1, "clicky_button", 3, "click"]], template: function DefaultButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultButtonComponent_Template_button_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height, "px")("width", ctx.width, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
    } }, styles: [".clicky_button[_ngcontent-%COMP%] {\n  background-color: #00000029;\n  border-radius: 34px;\n  padding-left: 4px;\n  padding-right: 4px;\n  color: #959595;\n  font-family: Calibre, sans-serif;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-top: 18px;\n  font-size: 12px;\n  letter-spacing: 2px;\n  border: 1px solid #2727299e;\n  transition-duration: 80ms;\n  border-style: outset;\n  text-align: center;\n  box-shadow: 0px 0px 6px #121212;\n  -webkit-user-select: none;\n  user-select: none;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 6px;\n}\n\n.clickety_button[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 100px;\n  background: transparent;\n  border: none;\n  color: #bababa;\n  font-size: 16px;\n}\n\n.clicky_button2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 14px 0px;\n  width: 100%;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 16px;\n  color: white;\n  font-family: Calibre, sans-serif;\n  pointer-events: auto;\n  border: none;\n  outline-color: transparent;\n  outline-style: none;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background: #4e44ce;\n}\n\n.clicky_button[_ngcontent-%COMP%]:hover {\n  background-color: #141414;\n  box-shadow: 0px 0px 5px black;\n  transition-duration: 80ms;\n  cursor: pointer;\n  text-shadow: rgba(71, 159, 250, 0.3) 0px 0px 30px;\n  color: #fff;\n}\n\n.clicky_button[_ngcontent-%COMP%]:active {\n  background-color: #0e0e0e;\n  transition-duration: 80ms;\n  text-shadow: 0px 0px 6px #fa255a;\n  color: #fa255a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBR0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7QUFESiIsImZpbGUiOiJkZWZhdWx0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGlja3lfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMjk7XG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgY29sb3I6ICM5NTk1OTU7XG4gICAgZm9udC1mYW1pbHk6IENhbGlicmUsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNzI3Mjk5ZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA4MG1zO1xuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAjMTIxMjEyO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2cHg7XG59XG5cbi5jbGlja2V0eV9idXR0b24ge1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjYmFiYWJhO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNsaWNreV9idXR0b24yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDE0cHggMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IENhbGlicmUsIHNhbnMtc2VyaWY7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzgsIDY4LCAyMDYpO1xufVxuXG4uY2xpY2t5X2J1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAyMCwgMjApO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDgwbXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtc2hhZG93OiByZ2IoNzEgMTU5IDI1MCAvIDMwJSkgMHB4IDBweCAzMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uY2xpY2t5X2J1dHRvbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMTQsIDE0KTtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5fYmFja2dyb3VuZF9jb2xvcik7XG4gICAgLy9ib3gtc2hhZG93OiAwcHggMHB4IDJweCBibGFjaztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA4MG1zO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCByZ2IoMjUwLCAzNywgOTApO1xuICAgIGNvbG9yOiByZ2IoMjUwLCAzNywgOTApO1xufSJdfQ== */"] });


/***/ }),

/***/ 57544:
/*!*********************************************************!*\
  !*** ./src/app/components/fee-box/fee-box.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeeBoxComponent": () => (/* binding */ FeeBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 48750);



class FeeBoxComponent {
    constructor() {
        this.selectedBox = "normal";
        this.priorityGasPrice = '';
        this.baseGasPrice = '';
        this.estimatedTxFee = '~';
        this.customGasPrice = this.baseGasPrice;
        this.selectGasPrice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    setCustomGasPrice(gas) {
        this.customGasPrice = gas;
    }
    getBaseGasPrice() {
        return Number(this.baseGasPrice);
    }
    newCustomFee(event) {
        this.customGasPrice = event.target.value;
        this.selectFee('custom');
    }
    checkFeeValue(event) {
        event.target.value = this.customGasPrice;
    }
    selectFee(box) {
        this.selectedBox = box;
        switch (this.selectedBox) {
            case 'normal': {
                this.selectGasPrice.emit(this.baseGasPrice);
                break;
            }
            case 'quick': {
                this.selectGasPrice.emit(this.priorityGasPrice);
                break;
            }
            case 'custom': {
                if (Number(this.customGasPrice) < Number(this.baseGasPrice)) {
                    this.customGasPrice = this.baseGasPrice;
                }
                this.selectGasPrice.emit(this.customGasPrice);
                break;
            }
        }
    }
}
FeeBoxComponent.ɵfac = function FeeBoxComponent_Factory(t) { return new (t || FeeBoxComponent)(); };
FeeBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeeBoxComponent, selectors: [["app-fee-box"]], inputs: { priorityGasPrice: "priorityGasPrice", baseGasPrice: "baseGasPrice", estimatedTxFee: "estimatedTxFee" }, outputs: { selectGasPrice: "selectGasPrice" }, decls: 21, vars: 5, consts: [[1, "container_flex", 2, "flex-direction", "column", "width", "auto", "height", "auto", "justify-content", "space-evenly"], [2, "margin", "4px"], [1, "container_flex", 2, "flex-direction", "row", "padding-left", "8px"], [1, "container_flex", 2, "flex-direction", "column", "width", "auto", "height", "auto"], [1, "container_flex", "fee_box", 2, "height", "30px", "width", "80px", "font-weight", "bold", 3, "ngClass", "click"], [2, "margin", "2px", "margin-top", "8px", "padding-right", "8px"], ["type", "number", "name", "sendAmount", "placeholder", "nDjtx", 1, "fee_input_box", 3, "min", "blur", "keyup"]], template: function FeeBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Price Per Fee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeeBoxComponent_Template_div_click_7_listener() { return ctx.selectFee("normal"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 1.00 nDjtx ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeeBoxComponent_Template_div_click_12_listener() { return ctx.selectFee("quick"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 1.02 nDjtx ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "quick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeeBoxComponent_Template_div_click_17_listener() { return ctx.selectFee("custom"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function FeeBoxComponent_Template_input_blur_18_listener($event) { return ctx.checkFeeValue($event); })("keyup", function FeeBoxComponent_Template_input_keyup_18_listener($event) { return ctx.newCustomFee($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" estimated fee: ", ctx.estimatedTxFee, " DJTX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedBox == "normal" ? "selected_box" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedBox == "quick" ? "selected_box" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedBox == "custom" ? "selected_box" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx.baseGasPrice);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".container_flex[_ngcontent-%COMP%] {\n  margin: 0px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-size: cover;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n}\n\n.fee_box[_ngcontent-%COMP%] {\n  margin-right: 7px;\n  padding: 3px;\n  border-radius: 7px;\n  border-width: 2px;\n  border-color: var(--darker_background_color);\n  background-color: #0f0f0f;\n  box-shadow: -2px 2px 0px var(--darker_background_color);\n  border-style: solid;\n  transition-duration: 120ms;\n}\n\n.fee_box[_ngcontent-%COMP%]:hover {\n  border-color: var(--main_color_1);\n  box-shadow: -2px 2px 0px var(--main_color_1);\n  cursor: pointer;\n  transition-duration: 120ms;\n}\n\n.selected_box[_ngcontent-%COMP%] {\n  border-color: var(--main_color_1);\n  box-shadow: 0px 0px 0px var(--main_color_1);\n  transform: translate(-2px, 2px);\n  transition-duration: 120ms;\n}\n\n.selected_box[_ngcontent-%COMP%]:hover {\n  border-color: var(--main_color_1);\n  box-shadow: 0px 0px 0px var(--main_color_1);\n  transform: translate(-2px, 2px);\n  transition-duration: 120ms;\n}\n\ninput[_ngcontent-%COMP%] {\n  margin: 8px;\n  background-color: rgba(0, 0, 0, 0);\n  border-color: rgba(0, 0, 0, 0);\n  border-style: none;\n  outline: none;\n  font-family: Calibre;\n  box-shadow: 0px 0px 5px inset var(--main_background_color);\n  border-radius: 2px;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  color: white;\n  font-weight: bold;\n  transition-duration: 110ms;\n}\n\ninput[_ngcontent-%COMP%]:hover {\n  transition-duration: 110ms;\n  background-color: rgba(0, 0, 0, 0);\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  transition-duration: 110ms;\n  transition-duration: 110ms;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  transition-duration: 110ms;\n  -webkit-appearance: none;\n}\n\ninput[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.faulty_value[_ngcontent-%COMP%] {\n  color: #ff004c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZS1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsdURBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUNBQUE7RUFDQSwyQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSwwREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7O0VBRUksMEJBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJmZWUtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9mbGV4IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mZWVfYm94IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFya2VyX2JhY2tncm91bmRfY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE1KTtcbiAgICBib3gtc2hhZG93OiAtMnB4IDJweCAwcHggdmFyKC0tZGFya2VyX2JhY2tncm91bmRfY29sb3IpO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTIwbXM7XG59XG5cbi5mZWVfYm94OmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgYm94LXNoYWRvdzogLTJweCAycHggMHB4IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEyMG1zO1xufVxuXG4uc2VsZWN0ZWRfYm94IHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAycHgpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEyMG1zO1xufVxuXG4uc2VsZWN0ZWRfYm94OmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAycHgpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEyMG1zO1xufVxuXG5pbnB1dCB7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IENhbGlicmU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggaW5zZXQgdmFyKC0tbWFpbl9iYWNrZ3JvdW5kX2NvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTEwbXM7XG59XG5cbmlucHV0OmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMTBtcztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTEwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTEwbXM7XG59XG5cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDExMG1zO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4uZmF1bHR5X3ZhbHVlIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgNzYpO1xufSJdfQ== */"] });


/***/ }),

/***/ 17427:
/*!*****************************************************************!*\
  !*** ./src/app/components/input-fancy/input-fancy.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputFancyComponent": () => (/* binding */ InputFancyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);


class InputFancyComponent {
    constructor() {
        this.inputText = "";
        this.inputTextEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.inputType = "number";
        this.placeholder = "add a placeholder u idiot";
        this.inputHeight = 28;
        this.inputWidth = 75;
    }
    ngOnInit() {
    }
    onInputKey(event) {
        this.inputText = event.target.value;
        //console.log(this.inputText);
        this.inputTextEvent.emit(this.inputText);
    }
}
InputFancyComponent.ɵfac = function InputFancyComponent_Factory(t) { return new (t || InputFancyComponent)(); };
InputFancyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputFancyComponent, selectors: [["app-input-fancy"]], inputs: { inputType: "inputType", placeholder: "placeholder", inputWidth: "inputWidth", inputHeight: "inputHeight" }, outputs: { inputTextEvent: "inputTextEvent" }, decls: 2, vars: 5, consts: [["name", "sendAmount", "min", "0", "style.height.px", "14px", 3, "type", "placeholder", "keyup"]], template: function InputFancyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InputFancyComponent_Template_input_keyup_1_listener($event) { return ctx.onInputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.inputWidth, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.inputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);
    } }, styles: ["input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  background: #181818;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #2f2f2f;\n  border-radius: 6px;\n  color: white;\n  font-size: 12px;\n  line-height: 16px;\n  max-height: 22px;\n  transition-duration: 110ms;\n}\n\ninput[_ngcontent-%COMP%]:hover {\n  transition-duration: 110ms;\n  background-color: #1d1d1d;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: 1px solid #4dff97;\n  transition-duration: 140ms;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  transition-duration: 110ms;\n  -webkit-appearance: none;\n}\n\ninput[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.faulty_value[_ngcontent-%COMP%] {\n  color: #ff004c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LWZhbmN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTs7RUFFSSwwQkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImlucHV0LWZhbmN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDI0LCAyNCwgMjQpO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDcsIDQ3LCA0Nyk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgbWF4LWhlaWdodDogMjJweDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMTBtcztcbn1cblxuaW5wdXQ6aG92ZXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDExMG1zO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMjksIDI5KTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjNGRmZjk3O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDE0MG1zO1xufVxuXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMTBtcztcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbmlucHV0IHtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuLmZhdWx0eV92YWx1ZSB7XG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDc2KTtcbn0iXX0= */"] });


/***/ }),

/***/ 30419:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/modal-module/account-settings-modal/account-settings-modal.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountSettingsModalComponent": () => (/* binding */ AccountSettingsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../default-button/default-button.component */ 43775);



class AccountSettingsModalComponent {
    constructor() {
        this.accountAddress = "Loading";
        this.djtxBalance = "0";
        this.accountIndex = 0;
        this.closeModalButton = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.switchToNextAccount = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.switchToPreviousAccount = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    nextAccount() {
        this.switchToNextAccount.emit();
    }
    previousAccount() {
        this.switchToPreviousAccount.emit();
    }
    closeModal() {
        this.closeModalButton.emit();
    }
}
AccountSettingsModalComponent.ɵfac = function AccountSettingsModalComponent_Factory(t) { return new (t || AccountSettingsModalComponent)(); };
AccountSettingsModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccountSettingsModalComponent, selectors: [["app-account-settings-modal"]], inputs: { accountAddress: "accountAddress", djtxBalance: "djtxBalance", accountIndex: "accountIndex" }, outputs: { closeModalButton: "closeModalButton", switchToNextAccount: "switchToNextAccount", switchToPreviousAccount: "switchToPreviousAccount" }, decls: 33, vars: 10, consts: [[1, "container_flex", 2, "justify-content", "flex-start", "align-items", "center", "flex-direction", "column"], [2, "margin", "10px", "margin-top", "25px", "margin-bottom", "12px", "width", "auto"], [2, "text-align", "center"], [1, "shadow_box", 2, "margin", "10px", "box-shadow", "0px 0px 7px black", "height", "auto", "padding", "5px"], [2, "text-align", "left"], [1, "glowy_text"], [1, "address", 2, "width", "auto"], [2, "display", "flex", "width", "90%", "justify-content", "space-between"], ["text", "Previous", 3, "height", "width", "buttonClick"], ["text", "Next", 3, "height", "width", "buttonClick"], [2, "position", "absolute", "left", "5px", "top", "440px"], [2, "display", "flex", "width", "320px", "justify-content", "space-evenly"], ["text", "Return", 3, "height", "width", "buttonClick"]], template: function AccountSettingsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Selected Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Account: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " DJTX: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Derivation Path: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " You can create new accounts and switch between them with the buttons below. You can create any number of accounts. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " You can read more about how accounts in the Metro docs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "app-default-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("buttonClick", function AccountSettingsModalComponent_Template_app_default_button_buttonClick_28_listener() { return ctx.previousAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "app-default-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("buttonClick", function AccountSettingsModalComponent_Template_app_default_button_buttonClick_29_listener() { return ctx.nextAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "app-default-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("buttonClick", function AccountSettingsModalComponent_Template_app_default_button_buttonClick_32_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", ctx.accountIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.djtxBalance);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("m/44'/60'/0'/0/", ctx.accountIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.accountAddress, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 35)("width", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 35)("width", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 35)("width", 135);
    } }, directives: [_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__.DefaultButtonComponent], styles: [".container_flex[_ngcontent-%COMP%] {\n  margin: 0px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-size: cover;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\nh3[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n  font-family: Calibre, sans-serif;\n}\n\n.address[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #c7c7c7;\n  background-color: var(--main_background_color);\n  border-radius: 3px;\n  margin-top: 0px;\n  margin-left: 8px;\n  margin-right: 8px;\n  box-shadow: 0px 0px 4px inset black;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  transition-duration: 200ms;\n}\n\n.shadow_box[_ngcontent-%COMP%] {\n  background-color: var(--main_background_color);\n  overflow-wrap: normal;\n  border-radius: 5px;\n  box-shadow: 0px 0px var(--shadow_size) var(--shadow_color) inset;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  box-sizing: border-box;\n  width: 90%;\n  height: 100%;\n}\n\n.glowy_text[_ngcontent-%COMP%] {\n  color: var(--main_color_1);\n  letter-spacing: 0.8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtc2V0dGluZ3MtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFHQSwyQkFBQTtFQUNBLHlCQUFBO0VBSUEsaUJBQUE7QUFERjs7QUFLQTtFQUNFLGdDQUFBO0FBRkY7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLG1DQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLDJCQUFBO0VBQ0EseUJBQUE7RUFJQSxpQkFBQTtFQUNBLDBCQUFBO0FBTEo7O0FBUUE7RUFDRSw4Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRUFBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7QUFQRiIsImZpbGUiOiJhY2NvdW50LXNldHRpbmdzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9mbGV4IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIFxuXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG59XG5cbmgzLCBoMiwgaDEsIGg0LCBoNSB7XG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJlLCBzYW5zLXNlcmlmO1xufVxuXG4uYWRkcmVzcyB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiByZ2IoMTk5LCAxOTksIDE5OSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbl9iYWNrZ3JvdW5kX2NvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IGluc2V0IGJsYWNrO1xuICBcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgfVxuXG4uc2hhZG93X2JveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5fYmFja2dyb3VuZF9jb2xvcik7XG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IHZhcigtLXNoYWRvd19zaXplKSB2YXIoLS1zaGFkb3dfY29sb3IpIGluc2V0O1xuXG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ2xvd3lfdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluX2NvbG9yXzEpO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG59Il19 */"] });


/***/ }),

/***/ 11311:
/*!**********************************************************************************!*\
  !*** ./src/app/components/modal-module/add-new-token/add-new-token.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenSearchStates": () => (/* binding */ TokenSearchStates),
/* harmony export */   "AddNewTokenComponent": () => (/* binding */ AddNewTokenComponent)
/* harmony export */ });
/* harmony import */ var _Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ 40342);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ 87374);
/* harmony import */ var src_metro_backend_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/metro_backend/utils */ 5381);
/* harmony import */ var _input_fancy_input_fancy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../input-fancy/input-fancy.component */ 17427);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../default-button/default-button.component */ 43775);









function AddNewTokenComponent_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Enter a token address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function AddNewTokenComponent_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please enter a valid address (\u256C\u25E3\uFE4F\u25E2) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function AddNewTokenComponent_h4_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Searching for token... (\u201E\u2022 \u058A \u2022\u201E) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function AddNewTokenComponent_h4_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No token has been found in the network. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function AddNewTokenComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function AddNewTokenComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Symbol: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Decimals: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.tokenName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.tokenSymbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.tokenDecimals);
  }
}

function AddNewTokenComponent_h4_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Anyone can create tokens, so make sure the token-address is correct. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function AddNewTokenComponent_app_default_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-default-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("buttonClick", function AddNewTokenComponent_app_default_button_18_Template_app_default_button_buttonClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r8.addToken();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("height", 35)("width", 135);
  }
}

var TokenSearchStates;

(function (TokenSearchStates) {
  TokenSearchStates[TokenSearchStates["NO_ADDRESS"] = 0] = "NO_ADDRESS";
  TokenSearchStates[TokenSearchStates["FAULTY_ADDRESS"] = 1] = "FAULTY_ADDRESS";
  TokenSearchStates[TokenSearchStates["SEARCHING"] = 2] = "SEARCHING";
  TokenSearchStates[TokenSearchStates["TOKEN_FOUND"] = 3] = "TOKEN_FOUND";
  TokenSearchStates[TokenSearchStates["NO_TOKEN_FOUND"] = 4] = "NO_TOKEN_FOUND";
})(TokenSearchStates || (TokenSearchStates = {}));
/*
class CurrentModal {
  constructor(public modal: Modals) {}
}
 */


class AddNewTokenComponent {
  constructor() {
    this.currentAddressIndex = 0;
    this.searchStates = TokenSearchStates; // Need to have a reference to the enum so we can use.

    this.currentSearchState = TokenSearchStates.NO_ADDRESS;
    this.currentAddress = "";
    this.validTokenAddress = "";
    this.closeModalButton = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.tokenName = "";
    this.tokenSymbol = "";
    this.tokenDecimals = 0;
  }

  ngOnInit() {}

  closeModal() {
    this.closeModalButton.emit();
  } //Handle the token search behavior based on the current user input of the token address.


  tokenAddressInput(event) {
    var _this = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //No need to do all the shit below if the token address is empty...
      if (event == "") {
        _this.currentAddress = event;
        _this.currentSearchState = _this.searchStates.NO_ADDRESS;
        return;
      } //Only update our shit if we actually need to, this method gets called on ALL inputs.


      if (event != _this.currentAddress) {
        _this.currentAddress = event;
        /* -- Some simple address-checking logic to make sure the address is valid, updates UI  -- */

        _this.currentSearchState = ethers__WEBPACK_IMPORTED_MODULE_5__.isAddress(_this.currentAddress) ? _this.searchStates.SEARCHING : _this.searchStates.FAULTY_ADDRESS;

        if (_this.currentSearchState == _this.searchStates.SEARCHING) {
          /* Using ERC20 name() method to check if the token exists, this is temporary okay... */
          (0,src_metro_backend_utils__WEBPACK_IMPORTED_MODULE_1__.getTokenName)(_this.currentAddress).then( /*#__PURE__*/function () {
            var _ref = (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
              if (response.data.result == "0x") {
                _this.currentSearchState = _this.searchStates.NO_TOKEN_FOUND;
              } else {
                _this.tokenSymbol = "Loading...";
                let decResponse = yield (0,src_metro_backend_utils__WEBPACK_IMPORTED_MODULE_1__.getTokenDecimals)(_this.currentAddress);
                _this.tokenDecimals = Number(decResponse.data.result);
                let symbolResponse = yield (0,src_metro_backend_utils__WEBPACK_IMPORTED_MODULE_1__.getTokenSymbol)(_this.currentAddress);
                _this.tokenSymbol = ethers__WEBPACK_IMPORTED_MODULE_6__.toUtf8String(symbolResponse.data.result).replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
                _this.currentSearchState = _this.searchStates.TOKEN_FOUND;
                _this.tokenName = ethers__WEBPACK_IMPORTED_MODULE_6__.toUtf8String(response.data.result).replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
              }
            });

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }()).catch(e => {
            console.warn(e);
            _this.currentSearchState = _this.searchStates.NO_TOKEN_FOUND;
          });
        }
      }
    })();
  }

  addToken() {
    if (this.currentSearchState == this.searchStates.TOKEN_FOUND) {
      (0,src_metro_backend_utils__WEBPACK_IMPORTED_MODULE_1__.addTokenToList)({
        address: this.currentAddress,
        chainId: 43113,
        name: this.tokenName,
        symbol: this.tokenSymbol,
        decimals: this.tokenDecimals,
        logoURI: ""
      }, this.currentAddressIndex);
    }

    this.closeModal();
  }

}

AddNewTokenComponent.ɵfac = function AddNewTokenComponent_Factory(t) {
  return new (t || AddNewTokenComponent)();
};

AddNewTokenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AddNewTokenComponent,
  selectors: [["app-add-new-token"]],
  inputs: {
    currentAddressIndex: "currentAddressIndex"
  },
  outputs: {
    closeModalButton: "closeModalButton"
  },
  decls: 19,
  vars: 12,
  consts: [[1, "container_flex", 2, "justify-content", "flex-start"], [2, "margin", "10px", "margin-top", "15px", "margin-bottom", "25px"], [1, "shadow_box", 2, "margin", "10px", "box-shadow", "0px 0px 7px black", "height", "46.5px"], ["inputType", "", "placeholder", "Enter Token Address", 2, "justify-self", "center", 3, "inputWidth", "inputHeight", "inputTextEvent"], [4, "ngIf"], ["class", "glowyText", 4, "ngIf"], ["class", "lds-ripple", "style", "margin-top: 35px; margin-right: 5px;", 4, "ngIf"], ["style", "display: flex; margin: 10px;  height: 98px; width: 300px; justify-content: left; align-content: left; flex-direction: column;", 4, "ngIf"], [2, "margin-top", "95px", "width", "280px"], [2, "position", "absolute", "left", "5px", "top", "440px"], [2, "display", "flex", "width", "320px", "justify-content", "space-evenly"], ["text", "Close", 3, "height", "width", "buttonClick"], ["text", "Add", 3, "height", "width", "buttonClick", 4, "ngIf"], [1, "glowyText"], [1, "lds-ripple", 2, "margin-top", "35px", "margin-right", "5px"], [2, "display", "flex", "margin", "10px", "height", "98px", "width", "300px", "justify-content", "left", "align-content", "left", "flex-direction", "column"], [2, "margin", "8px", "margin-bottom", "13px", "text-align", "left", "font-weight", "normal", "font-size", "16px"], ["text", "Add", 3, "height", "width", "buttonClick"]],
  template: function AddNewTokenComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Add Token");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "app-input-fancy", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputTextEvent", function AddNewTokenComponent_Template_app_input_fancy_inputTextEvent_6_listener($event) {
        return ctx.tokenAddressInput($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AddNewTokenComponent_h4_7_Template, 2, 0, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AddNewTokenComponent_h4_8_Template, 2, 0, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AddNewTokenComponent_h4_9_Template, 2, 0, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AddNewTokenComponent_h4_10_Template, 2, 0, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AddNewTokenComponent_div_11_Template, 3, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AddNewTokenComponent_div_12_Template, 13, 3, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, AddNewTokenComponent_h4_14_Template, 2, 0, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "app-default-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("buttonClick", function AddNewTokenComponent_Template_app_default_button_buttonClick_17_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, AddNewTokenComponent_app_default_button_18_Template, 1, 2, "app-default-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputWidth", 245)("inputHeight", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentSearchState == ctx.searchStates.NO_ADDRESS);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentSearchState == ctx.searchStates.FAULTY_ADDRESS);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentSearchState == ctx.searchStates.SEARCHING);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentSearchState == ctx.searchStates.NO_TOKEN_FOUND);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentSearchState == ctx.searchStates.SEARCHING);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentSearchState == ctx.searchStates.TOKEN_FOUND);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentSearchState == ctx.searchStates.TOKEN_FOUND);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("height", 35)("width", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentSearchState == ctx.searchStates.TOKEN_FOUND);
    }
  },
  directives: [_input_fancy_input_fancy_component__WEBPACK_IMPORTED_MODULE_2__.InputFancyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_3__.DefaultButtonComponent],
  styles: [".container_flex[_ngcontent-%COMP%] {\n  margin: 0px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-size: cover;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.shadow_box[_ngcontent-%COMP%] {\n  background-color: var(--main_background_color);\n  overflow-wrap: normal;\n  border-radius: 5px;\n  box-shadow: 0px 0px var(--shadow_size) var(--shadow_color) inset;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  box-sizing: border-box;\n  width: 90%;\n  height: 100%;\n}\n\n.glowyText[_ngcontent-%COMP%] {\n  color: var(--main_color_1);\n  text-shadow: 0px 0px 5px var(--main_color_1);\n}\n\n.lds-ripple[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 3px solid var(--main_color_1);\n  filter: drop-shadow(0px 0px 10px var(--main_color_1));\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.26, 0.69, 1.25) infinite;\n}\n\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.5s;\n}\n\n@keyframes lds-ripple {\n  0% {\n    top: 25px;\n    left: 25px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 50px;\n    height: 50px;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1uZXctdG9rZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFHQSwyQkFBQTtFQUNBLHlCQUFBO0VBSUEsaUJBQUE7QUFERjs7QUFLQTtFQUNFLDhDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdFQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBRUEsc0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQUpGOztBQVNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTkY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EscURBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtRUFBQTtBQUxGOztBQU9BO0VBQ0Usc0JBQUE7QUFKRjs7QUFNQTtFQUNFO0lBQ0UsU0FBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUFIRjtFQUtBO0lBQ0UsUUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUFIRjtBQUNGIiwiZmlsZSI6ImFkZC1uZXctdG9rZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyX2ZsZXgge1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgXG5cbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbn1cblxuLnNoYWRvd19ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluX2JhY2tncm91bmRfY29sb3IpO1xuICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCB2YXIoLS1zaGFkb3dfc2l6ZSkgdmFyKC0tc2hhZG93X2NvbG9yKSBpbnNldDtcblxuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdsb3d5VGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluX2NvbG9yXzEpO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tbWFpbl9jb2xvcl8xKTtcbn1cblxuXG4gIFxuLmxkcy1yaXBwbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5sZHMtcmlwcGxlIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggdmFyKC0tbWFpbl9jb2xvcl8xKSk7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBsZHMtcmlwcGxlIDFzIGN1YmljLWJlemllcigwLCAwLjI2LCAwLjY5LCAxLjI1KSBpbmZpbml0ZTtcbn1cbi5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcbiAgMCUge1xuICAgIHRvcDogMjVweDtcbiAgICBsZWZ0OiAyNXB4O1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSJdfQ== */"]
});

/***/ }),

/***/ 42496:
/*!*******************************************************************!*\
  !*** ./src/app/components/modal-module/modal-module.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalModuleComponent": () => (/* binding */ ModalModuleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _add_new_token_add_new_token_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-new-token/add-new-token.component */ 11311);
/* harmony import */ var _account_settings_modal_account_settings_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-settings-modal/account-settings-modal.component */ 30419);
/* harmony import */ var _view_connection_info_view_connection_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-connection-info/view-connection-info.component */ 89023);







function ModalModuleComponent_app_add_new_token_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-add-new-token", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeModalButton", function ModalModuleComponent_app_add_new_token_1_Template_app_add_new_token_closeModalButton_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("currentAddressIndex", ctx_r0.currentAddressIndex);
} }
function ModalModuleComponent_app_account_settings_modal_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-account-settings-modal", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeModalButton", function ModalModuleComponent_app_account_settings_modal_2_Template_app_account_settings_modal_closeModalButton_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.closeModal(); })("switchToNextAccount", function ModalModuleComponent_app_account_settings_modal_2_Template_app_account_settings_modal_switchToNextAccount_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.nextAccount(); })("switchToPreviousAccount", function ModalModuleComponent_app_account_settings_modal_2_Template_app_account_settings_modal_switchToPreviousAccount_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.previousAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("accountIndex", ctx_r1.currentAddressIndex)("accountAddress", ctx_r1.currentAccountAddress)("djtxBalance", ctx_r1.djtxBalance);
} }
function ModalModuleComponent_app_view_connection_info_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-view-connection-info", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeModalButton", function ModalModuleComponent_app_view_connection_info_3_Template_app_view_connection_info_closeModalButton_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.closeModal(); })("deleteConnectionButton", function ModalModuleComponent_app_view_connection_info_3_Template_app_view_connection_info_deleteConnectionButton_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.deleteConnection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("port", ctx_r2.connectionInfoPort);
} }
class ModalModuleComponent {
    constructor() {
        this.showModal = false;
        this.currentModal = src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.Modals.NONE;
        this.connectionInfoPort = null;
        this.currentAddressIndex = 0;
        this.currentAccountAddress = 'loading';
        this.djtxBalance = '0';
        this.switchToNextAccount = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.switchToPreviousAccount = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.closeModalButton = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.deleteConnectionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.modals = src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.Modals;
    }
    ngOnInit() {
    }
    nextAccount() {
        this.switchToNextAccount.emit();
    }
    previousAccount() {
        this.switchToPreviousAccount.emit();
    }
    closeModal() {
        console.log(this.connectionInfoPort);
        this.closeModalButton.emit();
    }
    deleteConnection(tabId) {
        this.deleteConnectionEvent.emit(tabId);
    }
}
ModalModuleComponent.ɵfac = function ModalModuleComponent_Factory(t) { return new (t || ModalModuleComponent)(); };
ModalModuleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ModalModuleComponent, selectors: [["app-modal-module"]], inputs: { showModal: "showModal", currentModal: "currentModal", connectionInfoPort: "connectionInfoPort", currentAddressIndex: "currentAddressIndex", currentAccountAddress: "currentAccountAddress", djtxBalance: "djtxBalance" }, outputs: { switchToNextAccount: "switchToNextAccount", switchToPreviousAccount: "switchToPreviousAccount", closeModalButton: "closeModalButton", deleteConnectionEvent: "deleteConnectionEvent" }, decls: 4, vars: 4, consts: [[1, "modal_background", 3, "ngClass"], [3, "currentAddressIndex", "closeModalButton", 4, "ngIf"], [3, "accountIndex", "accountAddress", "djtxBalance", "closeModalButton", "switchToNextAccount", "switchToPreviousAccount", 4, "ngIf"], [3, "port", "closeModalButton", "deleteConnectionButton", 4, "ngIf"], [3, "currentAddressIndex", "closeModalButton"], [3, "accountIndex", "accountAddress", "djtxBalance", "closeModalButton", "switchToNextAccount", "switchToPreviousAccount"], [3, "port", "closeModalButton", "deleteConnectionButton"]], template: function ModalModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ModalModuleComponent_app_add_new_token_1_Template, 1, 1, "app-add-new-token", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ModalModuleComponent_app_account_settings_modal_2_Template, 1, 3, "app-account-settings-modal", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ModalModuleComponent_app_view_connection_info_3_Template, 1, 1, "app-view-connection-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.showModal == true ? "" : "modal_disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentModal == ctx.modals.ADD_TOKEN);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentModal == ctx.modals.ACCOUNT_SETTINGS);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentModal == ctx.modals.VIEW_CONNECTION_INFO);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _add_new_token_add_new_token_component__WEBPACK_IMPORTED_MODULE_1__.AddNewTokenComponent, _account_settings_modal_account_settings_modal_component__WEBPACK_IMPORTED_MODULE_2__.AccountSettingsModalComponent, _view_connection_info_view_connection_info_component__WEBPACK_IMPORTED_MODULE_3__.ViewConnectionInfoComponent], styles: [".modal_background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 13px;\n  left: 9px;\n  width: 95vw;\n  border-radius: 14px;\n  height: 95vh;\n  z-index: 1;\n  -webkit-backdrop-filter: blur(7px);\n          backdrop-filter: blur(7px);\n  box-shadow: 0 0 7px -0.9px #000;\n  transition-duration: 170ms;\n  filter: opacity(100%);\n}\n\n.modal_disabled[_ngcontent-%COMP%] {\n  visibility: hidden;\n  -webkit-backdrop-filter: blur(0px);\n          backdrop-filter: blur(0px);\n  filter: opacity(0%);\n  transition-duration: 170ms;\n  box-shadow: 0 0 0 6px rgba(255, 255, 255, 0) inset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLW1vZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFFQSwrQkFBQTtFQUVBLDBCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFHQTtFQUVJLGtCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrREFBQTtBQURKIiwiZmlsZSI6Im1vZGFsLW1vZHVsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbF9iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxM3B4O1xuICAgIGxlZnQ6IDlweDtcbiAgICB3aWR0aDogOTV2dztcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIGhlaWdodDogOTV2aDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xuICAgIC8vYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYigyNTUgMjU1IDI1NSAvIDEwJSkgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDdweCAtMC45cHggIzAwMDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlcl9iYWNrZ3JvdW5kX2NvbG9yKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNzBtcztcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMTAwJSk7XG59XG4ubW9kYWxfZGlzYWJsZWQge1xuICAgIC8vZmlsdGVyOiBvcGFjaXR5KDAlKTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDBweCk7XG4gICAgZmlsdGVyOiBvcGFjaXR5KDAlKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNzBtcztcbiAgICBib3gtc2hhZG93OiAwIDAgMCA2cHggcmdiKDI1NSAyNTUgMjU1IC8gMCUpIGluc2V0O1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ 40789:
/*!********************************************************************************!*\
  !*** ./src/app/components/modal-module/select-asset/select-asset.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectAssetComponent": () => (/* binding */ SelectAssetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);

class SelectAssetComponent {
    constructor() { }
    ngOnInit() {
    }
}
SelectAssetComponent.ɵfac = function SelectAssetComponent_Factory(t) { return new (t || SelectAssetComponent)(); };
SelectAssetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectAssetComponent, selectors: [["app-select-asset"]], decls: 2, vars: 0, template: function SelectAssetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "select-asset works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtYXNzZXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 59842:
/*!****************************************************************************************!*\
  !*** ./src/app/components/modal-module/send-transaction/send-transaction.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendTransactionComponent": () => (/* binding */ SendTransactionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);

class SendTransactionComponent {
    constructor() { }
    ngOnInit() {
    }
}
SendTransactionComponent.ɵfac = function SendTransactionComponent_Factory(t) { return new (t || SendTransactionComponent)(); };
SendTransactionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendTransactionComponent, selectors: [["app-send-transaction"]], decls: 2, vars: 0, template: function SendTransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "send-transaction works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLXRyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 89023:
/*!************************************************************************************************!*\
  !*** ./src/app/components/modal-module/view-connection-info/view-connection-info.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewConnectionInfoComponent": () => (/* binding */ ViewConnectionInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../default-button/default-button.component */ 43775);




function ViewConnectionInfoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.port.sender.tab.title);
} }
function ViewConnectionInfoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r1.port.sender.tab.favIconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ViewConnectionInfoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " URL: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Tab ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Consider closing connections you aren't using by pressing the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " button below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.port.sender.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.port.sender.tab.id);
} }
class ViewConnectionInfoComponent {
    constructor() {
        this.closeModalButton = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.deleteConnectionButton = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    closeModal() {
        this.closeModalButton.emit();
    }
    deleteConnection() {
        this.deleteConnectionButton.emit(this.port.sender.tab.id);
    }
}
ViewConnectionInfoComponent.ɵfac = function ViewConnectionInfoComponent_Factory(t) { return new (t || ViewConnectionInfoComponent)(); };
ViewConnectionInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewConnectionInfoComponent, selectors: [["app-view-connection-info"]], inputs: { port: "port" }, outputs: { closeModalButton: "closeModalButton", deleteConnectionButton: "deleteConnectionButton" }, decls: 8, vars: 7, consts: [[1, "container_flex", 2, "justify-content", "flex-start", "align-items", "center", "flex-direction", "column"], ["style", "margin: 10px; margin-top: 25px; margin-bottom: 25px; width: auto;", 4, "ngIf"], ["class", "container_flex", "style", "margin: 10px; margin-top: 8px; width: auto; height: auto; flex-direction: column; align-items: center; text-align: center;", 4, "ngIf"], ["style", "display: flex; margin: 10px;  height: auto; width: auto; align-content: left; flex-direction: column;", 4, "ngIf"], [2, "position", "absolute", "left", "5px", "top", "440px"], [2, "display", "flex", "width", "320px", "justify-content", "space-evenly"], ["text", "Delete", 3, "height", "width", "buttonClick"], ["text", "Return", 3, "height", "width", "buttonClick"], [2, "margin", "10px", "margin-top", "25px", "margin-bottom", "25px", "width", "auto"], [2, "text-align", "center"], [1, "container_flex", 2, "margin", "10px", "margin-top", "8px", "width", "auto", "height", "auto", "flex-direction", "column", "align-items", "center", "text-align", "center"], [2, "width", "50px", "height", "50px", 3, "src"], [2, "display", "flex", "margin", "10px", "height", "auto", "width", "auto", "align-content", "left", "flex-direction", "column"], [2, "margin", "8px", "margin-bottom", "13px", "text-align", "center", "font-weight", "normal", "font-size", "16px"], [1, "glowyText"], [2, "margin", "8px", "margin-top", "18px", "text-align", "center", "font-weight", "normal", "font-size", "13px"]], template: function ViewConnectionInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewConnectionInfoComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ViewConnectionInfoComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewConnectionInfoComponent_div_3_Template, 16, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-default-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("buttonClick", function ViewConnectionInfoComponent_Template_app_default_button_buttonClick_6_listener() { return ctx.deleteConnection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-default-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("buttonClick", function ViewConnectionInfoComponent_Template_app_default_button_buttonClick_7_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.port != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.port != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.port != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 35)("width", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 35)("width", 135);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__.DefaultButtonComponent], styles: [".container_flex[_ngcontent-%COMP%] {\n  margin: 0px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-size: cover;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.shadow_box[_ngcontent-%COMP%] {\n  background-color: var(--main_background_color);\n  overflow-wrap: normal;\n  border-radius: 5px;\n  box-shadow: 0px 0px var(--shadow_size) var(--shadow_color) inset;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  box-sizing: border-box;\n  width: 90%;\n  height: 100%;\n}\n\n.glowyText[_ngcontent-%COMP%] {\n  color: var(--main_color_1);\n  text-shadow: 0px 0px 5px var(--main_color_1);\n}\n\n.lds-ripple[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 3px solid var(--main_color_1);\n  filter: drop-shadow(0px 0px 10px var(--main_color_1));\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.26, 0.69, 1.25) infinite;\n}\n\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.5s;\n}\n\n@keyframes lds-ripple {\n  0% {\n    top: 25px;\n    left: 25px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 50px;\n    height: 50px;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctY29ubmVjdGlvbi1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBR0EsMkJBQUE7RUFDQSx5QkFBQTtFQUlBLGlCQUFBO0FBREY7O0FBS0E7RUFDRSw4Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRUFBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFKRjs7QUFPQTtFQUNFLDBCQUFBO0VBQ0EsNENBQUE7QUFKRjs7QUFTQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU5GOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHFEQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUVBQUE7QUFMRjs7QUFPQTtFQUNFLHNCQUFBO0FBSkY7O0FBTUE7RUFDRTtJQUNFLFNBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VBSEY7RUFLQTtJQUNFLFFBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBSEY7QUFDRiIsImZpbGUiOiJ2aWV3LWNvbm5lY3Rpb24taW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfZmxleCB7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBcblxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxufVxuXG4uc2hhZG93X2JveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5fYmFja2dyb3VuZF9jb2xvcik7XG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IHZhcigtLXNoYWRvd19zaXplKSB2YXIoLS1zaGFkb3dfY29sb3IpIGluc2V0O1xuXG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ2xvd3lUZXh0IHtcbiAgY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1tYWluX2NvbG9yXzEpO1xufVxuXG5cbiAgXG4ubGRzLXJpcHBsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmxkcy1yaXBwbGUgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1tYWluX2NvbG9yXzEpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTBweCB2YXIoLS1tYWluX2NvbG9yXzEpKTtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMjYsIDAuNjksIDEuMjUpIGluZmluaXRlO1xufVxuLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5Aa2V5ZnJhbWVzIGxkcy1yaXBwbGUge1xuICAwJSB7XG4gICAgdG9wOiAyNXB4O1xuICAgIGxlZnQ6IDI1cHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ 33252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 48750);



const _c0 = function (a0, a1, a2) { return { "": a0, bar_left: a1, bar_right: a2 }; };
class NavbarComponent {
    constructor() {
        this.sendTabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.assetsTabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.settingsTabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.currentTab = "sendTab";
    }
    ngOnInit() {
    }
    onSendTab() {
        this.sendTabClick.emit();
        this.currentTab = "sendTab";
    }
    onAssetsTab() {
        this.assetsTabClick.emit();
        this.currentTab = "assetsTab";
    }
    onSettingsTab() {
        this.settingsTabClick.emit();
        this.currentTab = "settingsTab";
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], outputs: { sendTabClick: "sendTabClick", assetsTabClick: "assetsTabClick", settingsTabClick: "settingsTabClick" }, decls: 15, vars: 8, consts: [[2, "display", "flex", "width", "100vw", "justify-content", "center"], [1, "navbar", 2, "border-bottom-left-radius", "20px", "border-bottom-right-radius", "20px"], [1, "navbar_button", 3, "click"], ["id", "svg", "role", "img", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "30", "height", "30", "viewBox", "0, 0, 400,400", 3, "ngClass"], ["id", "svgg"], ["id", "path0", "d", "M55.370 52.218 C 46.886 53.558,40.996 61.112,40.707 71.026 C 40.636 73.454,41.416 76.023,57.496 126.323 C 66.771 155.336,74.553 179.886,74.789 180.879 C 75.869 185.415,79.255 189.530,83.602 191.589 L 86.111 192.778 222.500 192.872 C 297.593 192.924,358.889 192.825,358.889 192.651 C 358.889 191.978,354.691 188.260,352.314 186.828 C 348.422 184.483,67.956 54.059,64.815 53.133 C 61.518 52.162,57.928 51.814,55.370 52.218 M85.292 207.728 C 80.073 209.531,76.023 213.924,74.792 219.117 C 74.556 220.112,66.767 244.676,57.484 273.704 C 41.243 324.482,40.607 326.578,40.699 329.026 C 41.228 343.198,52.325 351.186,65.428 346.825 C 67.917 345.997,348.435 215.477,351.786 213.588 C 354.736 211.925,358.889 208.402,358.889 207.562 C 358.889 206.647,87.944 206.812,85.292 207.728 "], ["id", "svg", "role", "img", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "42", "height", "42", "viewBox", "0, 0, 400,400", 3, "ngClass"], ["id", "path0", "d", "M84.069 109.280 C 74.695 110.287,67.220 116.328,63.594 125.824 L 62.778 127.963 62.680 199.043 C 62.570 278.174,62.372 271.913,65.164 277.593 C 68.188 283.745,73.751 288.262,80.747 290.245 C 84.408 291.283,315.430 291.311,319.259 290.274 C 327.911 287.931,334.873 280.926,336.831 272.593 C 337.300 270.597,337.397 266.879,337.402 250.843 L 337.407 231.501 311.759 231.399 L 286.111 231.296 283.333 229.953 C 278.547 227.638,275.711 224.489,274.095 219.692 C 272.969 216.349,272.916 184.369,274.031 180.787 C 275.793 175.126,280.181 170.811,285.901 169.115 C 287.662 168.593,290.988 168.519,312.660 168.519 L 337.407 168.519 337.401 149.537 C 337.394 128.081,337.337 127.499,334.748 122.273 C 331.871 116.464,326.158 111.794,319.444 109.764 C 317.046 109.038,90.650 108.573,84.069 109.280 M102.308 145.470 L 103.519 146.681 103.519 200.000 L 103.519 253.319 102.308 254.530 C 99.931 256.908,92.310 256.381,90.947 253.744 C 89.923 251.764,90.262 147.073,91.296 145.914 C 93.376 143.583,100.149 143.310,102.308 145.470 M291.632 174.818 C 286.403 175.882,282.007 179.849,280.581 184.789 C 279.720 187.770,279.725 212.274,280.587 215.175 C 282.032 220.043,285.841 223.661,290.911 224.981 C 292.790 225.470,296.490 225.556,315.741 225.556 C 334.991 225.556,338.692 225.470,340.570 224.981 C 344.949 223.840,348.205 221.154,350.129 217.093 L 351.296 214.630 351.417 201.667 C 351.593 182.787,350.605 179.761,343.046 176.024 L 340.225 174.630 316.686 174.570 C 303.740 174.537,292.466 174.649,291.632 174.818 M312.080 190.297 C 322.666 195.703,318.352 211.602,306.556 210.655 C 296.948 209.884,293.280 198.334,300.597 191.893 C 303.644 189.210,308.602 188.521,312.080 190.297 "], ["id", "svg", "role", "img", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "36", "height", "36", "viewBox", "0, 0, 400,400", 3, "ngClass"], ["id", "path0", "d", "M147.963 64.002 C 135.520 68.291,135.861 67.567,137.967 85.199 C 140.331 104.988,140.556 103.728,133.761 108.766 C 123.627 116.281,115.689 124.222,108.405 134.130 C 104.171 139.889,104.915 139.764,87.539 137.636 C 71.531 135.676,71.356 135.667,69.693 136.680 C 67.727 137.879,62.963 148.794,62.963 152.101 C 62.963 153.872,63.703 154.564,76.111 164.390 C 90.211 175.556,89.830 174.952,88.421 183.889 C 86.824 194.019,86.874 206.031,88.562 217.447 C 89.862 226.242,90.432 225.375,75.820 236.834 C 64.531 245.686,63.333 246.824,63.333 248.692 C 63.333 250.727,67.526 260.861,69.303 263.120 C 70.783 265.001,71.311 265.001,87.526 263.140 L 102.500 261.421 104.429 262.251 C 106.093 262.967,106.746 263.596,109.169 266.818 C 116.898 277.095,125.626 285.574,135.905 292.789 C 141.105 296.439,141.070 296.204,139.061 314.175 C 137.013 332.482,136.700 331.809,149.170 335.872 C 155.696 337.999,155.035 338.451,166.151 324.259 C 177.015 310.389,176.785 310.548,184.262 311.659 C 194.204 313.135,207.141 313.047,217.219 311.435 C 228.219 309.676,226.592 308.791,238.144 322.804 C 249.915 337.081,248.946 336.490,256.046 333.709 C 267.546 329.204,267.141 330.221,264.754 311.839 C 262.338 293.240,262.059 294.445,270.192 288.335 C 274.361 285.204,285.186 274.304,289.062 269.335 C 294.227 262.712,293.277 262.879,311.542 265.393 C 327.512 267.591,327.553 267.591,329.158 265.320 C 330.437 263.511,332.823 258.487,334.035 255.053 C 335.958 249.602,336.644 250.543,321.664 238.082 C 309.533 227.992,309.505 227.949,310.765 221.450 C 313.027 209.780,313.296 194.758,311.448 183.256 C 310.548 177.649,310.624 177.554,325.329 166.122 C 339.238 155.309,338.762 156.226,335.161 147.163 C 331.305 137.454,332.343 137.851,315.556 139.660 C 295.410 141.831,297.432 142.384,290.389 132.778 C 284.273 124.436,276.240 116.316,267.963 110.106 C 261.391 105.176,261.554 106.113,263.895 86.778 C 265.639 72.374,265.653 71.869,264.329 70.275 C 262.872 68.519,251.930 63.704,249.397 63.704 C 247.475 63.704,246.189 65.019,238.089 75.270 C 225.720 90.922,226.723 90.196,219.237 88.917 C 207.484 86.910,193.725 86.826,182.037 88.692 C 175.827 89.684,175.787 89.653,164.574 75.325 C 153.366 61.004,154.472 61.758,147.963 64.002 M209.736 112.776 C 282.421 121.278,313.758 209.703,262.479 261.602 C 207.258 317.490,112.125 278.195,112.443 199.630 C 112.654 147.424,158.217 106.749,209.736 112.776 M191.852 153.547 C 154.205 160.372,139.729 206.510,166.793 233.416 C 191.521 258.001,233.764 248.003,244.781 214.959 C 255.954 181.445,226.497 147.266,191.852 153.547 M205.370 175.376 C 220.910 178.663,229.541 196.083,222.801 210.556 C 213.250 231.064,183.583 229.560,176.180 208.192 C 169.838 189.889,186.330 171.349,205.370 175.376 "], [1, "bar", 3, "ngClass"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_2_listener() { return ctx.onSendTab(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_6_listener() { return ctx.onAssetsTab(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_10_listener() { return ctx.onSettingsTab(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab == "sendTab" ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab == "assetsTab" ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab == "settingsTab" ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, ctx.currentTab == "assetsTab", ctx.currentTab == "sendTab", ctx.currentTab == "settingsTab"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: #101010;\n  overflow: hidden;\n  position: relative;\n  top: 5px;\n  display: flex;\n  width: 100%;\n  margin-bottom: 0px;\n  height: 46px;\n  fill: white;\n}\n\n.navbar_button[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  width: 100%;\n  height: 100%;\n  color: #343434;\n  fill: #343434;\n  border-width: 0px;\n  transition-duration: 200ms;\n}\n\n.navbar_button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  fill: var(--main_color_1);\n  transition-duration: 200ms;\n  color: var(--main_color_1);\n}\n\n.navbar_button[_ngcontent-%COMP%]:active {\n  cursor: pointer;\n  border-color: var(--main_color_1);\n  transition-duration: 200ms;\n  color: #b1002c;\n  fill: #b1002c;\n}\n\n.bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  width: 45px;\n  height: 1px;\n  margin-left: -20px;\n  left: 49.6%;\n  background-color: var(--main_color_1);\n  border-radius: 25px;\n  box-shadow: 0px 0px 9px 1px var(--main_color_1);\n  transition: all 170ms cubic-bezier(0.55, 0.41, 0.28, 1.3);\n}\n\n.bar_left[_ngcontent-%COMP%] {\n  left: 16%;\n  transition: all 170ms cubic-bezier(0.55, 0.41, 0.28, 1.3);\n}\n\n.bar_right[_ngcontent-%COMP%] {\n  left: 83.2%;\n  transition: all 170ms cubic-bezier(0.55, 0.41, 0.28, 1.3);\n}\n\n.selected[_ngcontent-%COMP%] {\n  transition-duration: 200ms;\n  fill: var(--main_color_1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBRUEseURBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7RUFFQSx5REFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUVBLHlEQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgZmlsbDogd2hpdGU7XG59XG5cbi5uYXZiYXJfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IHJnYig1MiwgNTIsIDUyKTtcbiAgICBmaWxsOiByZ2IoNTIsIDUyLCA1Mik7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG59XG5cbi5uYXZiYXJfYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsbDogdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgICBjb2xvcjogdmFyKC0tbWFpbl9jb2xvcl8xKTtcbn1cblxuLm5hdmJhcl9idXR0b246YWN0aXZlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluX2NvbG9yXzEpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICAgIGNvbG9yOiByZ2IoMTc3LCAwLCA0NCk7XG4gICAgZmlsbDogcmdiKDE3NywgMCwgNDQpO1xufVxuXG4uYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIGxlZnQ6IDQ5LjYlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDlweCAxcHggdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNzBtcyBjdWJpYy1iZXppZXIoMC41NSwgMC40MSwgMC4yOCwgMS4zKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTcwbXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuNDEsIDAuMjgsIDEuMyk7XG59XG5cbi5iYXJfbGVmdCB7XG4gICAgbGVmdDogMTYlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE3MG1zIGN1YmljLWJlemllcigwLjU1LCAwLjQxLCAwLjI4LCAxLjMpO1xuICAgIHRyYW5zaXRpb246IGFsbCAxNzBtcyBjdWJpYy1iZXppZXIoMC41NSwgMC40MSwgMC4yOCwgMS4zKTtcbn1cblxuLmJhcl9yaWdodCB7XG4gICAgbGVmdDogODMuMiU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTcwbXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuNDEsIDAuMjgsIDEuMyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDE3MG1zIGN1YmljLWJlemllcigwLjU1LCAwLjQxLCAwLjI4LCAxLjMpO1xufVxuXG4uc2VsZWN0ZWQge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICAgIGZpbGw6IHZhcigtLW1haW5fY29sb3JfMSk7XG59Il19 */"] });


/***/ }),

/***/ 29090:
/*!***************************************************************!*\
  !*** ./src/app/components/onboarding/onboarding.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingTabs": () => (/* binding */ OnboardingTabs),
/* harmony export */   "OnboardingComponent": () => (/* binding */ OnboardingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 48750);


var OnboardingTabs;
(function (OnboardingTabs) {
    OnboardingTabs[OnboardingTabs["MAIN_MENU"] = 0] = "MAIN_MENU";
    OnboardingTabs[OnboardingTabs["HARDWARE_WALLET"] = 1] = "HARDWARE_WALLET";
})(OnboardingTabs || (OnboardingTabs = {}));
class OnboardingComponent {
    constructor() {
        this.tabs = OnboardingTabs;
        this.currentTab = OnboardingTabs.MAIN_MENU;
    }
    ngOnInit() {
    }
    openXdjtxWebsite() {
        var _a;
        (_a = window.open('https://xdjtx.io', '_blank')) === null || _a === void 0 ? void 0 : _a.focus();
    }
    openMetroWeb() {
        var _a;
        localStorage.removeItem("GenerateNewWallet");
        (_a = window.open('metroWeb/index.html', '_blank')) === null || _a === void 0 ? void 0 : _a.focus();
    }
    hardwareWallet() {
        //let w: IWalletMethods = new WalletStateLedger();
    }
    generateNewWallet() {
        var _a;
        localStorage.setItem("GenerateNewWallet", '{}');
        (_a = window.open('metroWeb/index.html', '_blank')) === null || _a === void 0 ? void 0 : _a.focus();
    }
}
OnboardingComponent.ɵfac = function OnboardingComponent_Factory(t) { return new (t || OnboardingComponent)(); };
OnboardingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnboardingComponent, selectors: [["app-onboarding"]], decls: 33, vars: 2, consts: [[1, "container_flex", 3, "ngClass"], [1, ""], ["height", "46", 1, "sc-iJKOTD", "EFDTL"], [1, "sc-hGPBjI", "bOghYQ"], ["src", "../../../assets/djt_icon.png", "width", "32px", "height", "32px"], ["size", "16", "color", "#ffffff", "opacity", "1", 1, "sc-hKwDye", "gYyHxJ"], [1, "sc-jEieoE", "bCTywW"], ["id", "modal"], [2, "margin-top", "36px", "margin-bottom", "8px"], ["width", "145px", "height", "16.2574px", "id", "tabby", "xmlns", "http://www.w3.org/2000/svg", 1, "decypherLogo"], ["d", "M142.841,7.342h-3.274a2.263,2.263,0,0,1-1.823-.772,2.548,2.548,0,0,1-.6-1.716,2.16,2.16,0,0,1,.716-1.769A2.332,2.332,0,0,1,139.45,2.6h.331v0h4.174a1.045,1.045,0,0,0,0-2.09H139.43a4.144,4.144,0,0,0-2.907,1.027,4.315,4.315,0,0,0-1.414,3.326,4.335,4.335,0,0,0,2.753,4.32,7.149,7.149,0,0,0,2.215.256h2.765V16.1H145V7.341h-2.159Zm-3.62,3.471a1.112,1.112,0,0,0-1.488.512l-.081.168-.01.022-2.26,4.742h2.462l1.889-3.956a1.113,1.113,0,0,0-.512-1.488ZM124.749,2.284a1.05,1.05,0,0,0,0-2.1h-8.456v2.1Zm-.573,11.667h0a1.057,1.057,0,0,1,.952.484,1.152,1.152,0,0,1-.952,1.787h-8.168V7.573H123.7V9.52h-5.488v4.431Zm-19.354,2.013a1.105,1.105,0,0,1-1.105-1.105v0h0V9.289H97.928v6.675h-2.21V.285h2.21V7.312h8v7.545h0v0A1.105,1.105,0,0,1,104.822,15.964Zm1.105-14.436a1.053,1.053,0,0,0-2.105,0V6.209h2.105V1.528Zm-24,6a2.308,2.308,0,0,0,1.859-.787,2.6,2.6,0,0,0,.61-1.75,2.208,2.208,0,0,0-.73-1.8,2.385,2.385,0,0,0-1.619-.492l-4.593,0a1.066,1.066,0,1,1,0-2.131h4.613A4.227,4.227,0,0,1,85.036,1.6a4.4,4.4,0,0,1,1.441,3.391,4.42,4.42,0,0,1-2.806,4.4,7.317,7.317,0,0,1-2.259.261H78.594V16.2h-2.2V7.523Zm-17.5,6.284H62.252v2.156h2.182Zm-.025-3.266H62.226V12.7h2.183Zm0-9.373a1.021,1.021,0,0,0-2.042,0V9.536h2.042ZM49.1,12.181a3.467,3.467,0,0,1-.318.452,2.565,2.565,0,0,1-.8.657,2.809,2.809,0,0,1-2.045.187A2.939,2.939,0,0,1,43.9,10.756c-.023-.521-.02-1.043-.021-1.564,0-.284,0-.283,0-.567a4.26,4.26,0,0,0-.024-.706,1.088,1.088,0,0,0-2.16.194c-.014.662,0,1.04,0,1.7a10.439,10.439,0,0,0,.177,2.428,5.041,5.041,0,0,0,6.482,3.463,5.04,5.04,0,0,0,2.916-2.766l-2.041-.988-.134.229ZM46.749.279H46.7a4.774,4.774,0,0,0-3.212,1.138A6.117,6.117,0,0,0,41.8,4.523a1.03,1.03,0,0,0,2.009.453,3.108,3.108,0,0,1,2.815-2.643h0l.065,0a3.014,3.014,0,0,1,3.01,2.3l1.876-.808A4.946,4.946,0,0,0,46.749.279ZM31.027,16.18h.128v-.287h-.128v.287M22.6,13.935a1.05,1.05,0,0,0,0,2.1H31.06v-2.1Zm.458-11.163h0a1.059,1.059,0,0,1-.952-.484A1.152,1.152,0,0,1,23.061.5h8.168V9.15H23.536V7.2h5.488V2.772ZM11.005,4.444a32.284,32.284,0,0,1,.117,3.228q0,2.43-.112,3.419a5.907,5.907,0,0,1-.626,2.008A4.8,4.8,0,0,1,6.048,15.72L0,15.726V7.963A1.092,1.092,0,0,1,1.1,6.877,1.092,1.092,0,0,1,2.2,7.963v5.608H6.029a2.676,2.676,0,0,0,2.187-1.31,3.346,3.346,0,0,0,.568-1.491c.062-.6.092-1.791.092-3.186,0-1.432-.041-2.408-.092-2.931C8.548,2.2,5.556,2.287,5.556,2.287H0V0H5.657S10.816-.156,11.005,4.444ZM6.7,8.42H4.5v2.174H6.7Zm0-2.766H4.5V7.828H6.7Z", 2, "fill", "#fff"], [1, "welcomeText", 2, "margin-bottom", "4px", "font-family", "Inter, sans-serif", "padding-left", "82px", "font-size", "12px", "color", "#525252"], [2, "margin-top", "80px"], [2, "display", "grid", "grid-template-rows", "40px 40px", "width", "228px", "row-gap", "18px", "flex-direction", "row", "color", "#696964"], [1, "onboarding_button", 3, "click"], [2, "margin-top", "80px", "margin-bottom", "0px", "font-size", "11px", "font-weight", "400", "letter-spacing", "0.2px", "color", "#595964", "font-family", "Inter", "width", "210px", "line-height", "18px"], [2, "font-family", "Inter", "text-transform", "uppercase", "font-size", "9px", "margin-top", "4px", "letter-spacing", "1px", "color", "#ced4db"], [2, "margin-top", "20px"], ["id", "svg", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "170", "height", "170", "viewBox", "0, 0, 400,398.96907216494844", 1, "tabbys_style"], ["id", "svgg"], ["id", "path0", "d", "M248.557 29.682 C 234.420 33.414,230.241 51.149,241.308 60.444 C 251.670 69.147,267.741 62.232,269.282 48.407 C 270.594 36.642,259.649 26.754,248.557 29.682 M53.266 41.875 C 44.510 43.338,41.533 54.105,48.147 60.388 C 55.199 67.087,66.392 62.674,66.392 53.196 C 66.392 46.295,59.969 40.756,53.266 41.875 M129.278 104.039 C 88.755 110.073,74.292 112.298,72.990 112.698 C 63.637 115.571,56.835 123.717,55.040 134.196 C 54.523 137.215,54.524 141.622,55.058 208.866 C 55.481 262.240,55.445 260.720,56.379 264.290 C 58.545 272.578,64.222 279.240,71.443 281.969 C 72.642 282.422,177.276 309.275,181.134 310.120 C 184.826 310.929,181.901 311.313,254.639 300.457 C 291.211 294.999,321.644 290.380,322.268 290.192 C 331.490 287.414,338.878 276.158,340.392 262.577 C 340.720 259.635,341.562 138.470,341.277 135.258 C 340.027 121.178,332.662 110.076,323.084 107.834 C 320.925 107.328,189.106 95.858,185.876 95.895 C 184.313 95.912,170.635 97.881,129.278 104.039 M255.829 118.660 C 291.564 121.067,312.867 122.581,313.538 122.761 C 321.323 124.847,327.487 134.461,328.203 145.634 C 328.504 150.328,327.698 252.251,327.342 254.478 C 325.585 265.484,319.630 274.111,312.371 276.166 C 310.059 276.821,201.396 290.787,198.557 290.794 C 188.734 290.820,180.617 282.805,178.227 270.722 C 177.659 267.846,177.204 144.803,177.743 139.837 C 179.184 126.579,187.449 116.247,197.551 115.075 C 198.388 114.978,199.097 114.887,199.127 114.872 C 199.158 114.857,224.673 116.562,255.829 118.660 M221.938 148.832 C 220.114 150.157,217.400 153.605,216.593 155.621 C 216.084 156.895,216.237 157.312,217.526 158.156 C 220.555 160.140,231.159 166.642,231.238 166.563 C 231.287 166.514,229.554 162.372,227.387 157.360 C 223.081 147.403,223.342 147.812,221.938 148.832 M292.907 151.598 C 292.638 152.193,290.876 155.870,288.992 159.768 C 285.739 166.500,285.420 167.216,285.675 167.216 C 285.734 167.216,288.889 165.387,292.685 163.152 C 299.356 159.224,299.587 159.066,299.583 158.461 C 299.571 156.920,297.549 153.439,295.590 151.587 C 294.059 150.139,293.566 150.141,292.907 151.598 M222.784 169.147 C 221.831 169.586,221.781 169.659,213.775 182.268 C 205.932 194.620,205.657 195.117,205.832 196.666 C 206.066 198.741,205.732 198.608,220.722 202.574 C 238.387 207.247,239.731 207.322,239.314 203.622 C 239.199 202.608,228.834 171.644,228.196 170.409 C 227.455 168.976,224.600 168.310,222.784 169.147 M289.723 169.464 C 287.173 169.647,288.112 167.560,281.928 186.804 C 275.869 205.657,275.877 204.726,281.769 204.611 C 282.878 204.589,304.881 196.712,305.466 196.127 C 307.128 194.465,306.904 193.890,299.709 181.340 C 292.255 168.339,293.004 169.229,289.723 169.464 M259.117 227.451 C 258.921 227.561,258.581 228.002,258.362 228.431 C 257.985 229.170,257.797 229.995,257.015 234.330 C 256.108 239.364,253.539 241.785,249.186 241.710 C 245.987 241.655,245.474 242.062,246.817 243.591 C 248.814 245.866,252.488 245.700,257.423 243.110 L 259.691 241.920 261.697 242.661 C 263.399 243.289,263.705 243.471,263.708 243.855 C 263.713 244.460,264.706 247.582,264.939 247.726 C 265.188 247.880,265.857 246.906,266.612 245.292 C 267.180 244.078,267.303 243.948,267.999 243.821 C 270.077 243.445,272.371 241.774,272.371 240.637 C 272.371 239.626,271.975 239.504,270.258 239.986 C 265.203 241.404,262.759 239.250,261.645 232.397 C 261.042 228.688,260.122 226.889,259.117 227.451 M334.124 333.617 C 318.954 335.971,313.434 354.583,324.698 365.400 C 336.421 376.658,355.215 369.770,356.024 353.918 C 356.628 342.088,345.573 331.841,334.124 333.617 M134.490 336.400 C 126.300 338.605,123.414 348.880,129.319 354.804 C 137.079 362.588,150.114 354.783,147.313 344.029 C 145.856 338.433,139.961 334.926,134.490 336.400 ", "stroke", "none", "fill", "#fffff", "fill-rule", "evenodd"], [2, "width", "90%"], [1, "onboarding_button", "outlines_only", 2, "width", "200px", "margin-top", "120px", 3, "click"]], template: function OnboardingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " by Dijets Inc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnboardingComponent_Template_div_click_15_listener() { return ctx.openMetroWeb(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " IMPORT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnboardingComponent_Template_div_click_17_listener() { return ctx.generateNewWallet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " CREATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "A Browser Extension to interact with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Dijets Utility Chain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Hardware wallet integration coming very soon! Sorry!! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnboardingComponent_Template_div_click_31_listener() { return ctx.currentTab = ctx.tabs.MAIN_MENU; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab == ctx.tabs.MAIN_MENU ? "" : "hide_container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab == ctx.tabs.HARDWARE_WALLET ? "" : "hide_container");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".container_flex[_ngcontent-%COMP%] {\n  margin: 0px;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  background: radial-gradient(84% 124% at 50% 100%, #111b24 0, rgba(34, 36, 52, 0) 100%), #0d0d18 !important;\n  background-size: cover;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  filter: opacity(1);\n  transition-duration: 270ms;\n  visibility: visible;\n}\n\n.hide_container[_ngcontent-%COMP%] {\n  transition-duration: 270ms;\n  opacity: 0;\n  visibility: hidden;\n  filter: opacity(0);\n}\n\n.EFDTL[_ngcontent-%COMP%] {\n  padding: 15px 12px;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid #053d3a17;\n  height: 24px;\n  width: 100%;\n}\n\n.bOghYQ[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #777777;\n  transition: fill 200ms ease 0s;\n}\n\n.boDOmS[_ngcontent-%COMP%] {\n  background-color: #222222;\n  min-width: 360px;\n  min-height: 540px;\n  height: 100vh;\n  width: 100vw;\n  border: 1px solid #323232;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden;\n}\n\n.fOaBQc[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  left: 0px;\n  bottom: 0px;\n}\n\n.gYyHxJ[_ngcontent-%COMP%] {\n  color: #555555;\n  text-align: center;\n  font-style: normal;\n  font-weight: 400;\n  opacity: 1;\n  font-size: 12px;\n  font-family: \"Inter\", sans-serif;\n  text-transform: uppercase;\n  line-height: 20px;\n  text-decoration: none;\n  background-color: transparent;\n}\n\n.bCTywW[_ngcontent-%COMP%] {\n  width: 12px;\n}\n\n.bOghYQ[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  padding-top: 12px;\n  padding-left: 10px;\n}\n\n.decypherLogo[_ngcontent-%COMP%] {\n  fill: #161611;\n  filter: drop-shadow(0 0 5px #020202);\n}\n\n.header_text[_ngcontent-%COMP%] {\n  color: var(--main_color_1);\n  font-weight: normal;\n  font-family: \"Glacial Indifference\", sans-serif;\n}\n\n.custom-1ggczkb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  background-image: radial-gradient(circle at center, #33353d 1px, #303238 1px, transparent 1px, transparent 100%);\n  opacity: 0.9;\n  background-repeat: repeat;\n  -webkit-background-position: right center;\n  background-position: right center;\n  margin-left: 130px;\n  background-size: 6px 6px;\n  -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 0.801), transparent 80%);\n  mask-image: radial-gradient(rgba(0, 0, 0, 0.801), transparent 80%);\n}\n\n.onboarding_button[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n  height: auto;\n  border-radius: 6px;\n  border-color: #1d2030;\n  border-width: 2px;\n  border-style: solid;\n  box-shadow: 0 0 6px #050505;\n  transition-duration: 0.1s;\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  letter-spacing: 0.08px;\n  font-size: 12px;\n  padding: 6px;\n  font-family: \"Inter\", sans-serif;\n}\n\n.onboarding_button[_ngcontent-%COMP%]:hover {\n  transition-duration: 0.1s;\n  border-color: var(--accent_color);\n  box-shadow: 0 0 8px 0 #050505;\n  color: var(--accent_color);\n  background-color: var(--bg_color);\n}\n\n.onboarding_button[_ngcontent-%COMP%]:active {\n  transition-duration: 0.1s;\n  border-color: #37be70;\n  box-shadow: 0 0 3px 0 #050505;\n  color: #37be70;\n  background-color: var(--bg_color);\n}\n\n.disabledonboarding_button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n  height: auto;\n  border-radius: 12px;\n  border-color: var(--bg_color_2);\n  border-width: 2px;\n  border-style: solid;\n  box-shadow: 0 0 6px #050505;\n  transition-duration: 0.1s;\n  cursor: not-allowed;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  font-size: 22px;\n}\n\n.outlines_only[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  border-width: 2px;\n  border-style: solid;\n}\n\n.outlines_only[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0);\n  color: #f83274;\n}\n\n.welcomeText[data-v-586cb64d][_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 12px;\n  color: #909087;\n  font-family: Calibre, sans-serif;\n  letter-spacing: 0.04px;\n}\n\na[_ngcontent-%COMP%] {\n  color: var(--main_color_1);\n  -webkit-text-decoration: 0;\n          text-decoration: 0;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-shadow: 0px 0px 8px var(--main_color_1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uYm9hcmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwR0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnSEFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUVBLHdCQUFBO0VBQ0EsMEVBQUE7RUFDQSxrRUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUdBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO1VBQUEsa0JBQUE7QUFDSjs7QUFFQTtFQUNJLDRDQUFBO0FBQ0oiLCJmaWxlIjoib25ib2FyZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfZmxleCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoODQlIDEyNCUgYXQgNTAlIDEwMCUsICMxMTFiMjQgMCwgcmdiYSgzNCwgMzYsIDUyLCAwKSAxMDAlKSwgIzBkMGQxOCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjcwbXM7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmhpZGVfY29udGFpbmVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNzBtcztcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMCk7XG59XG5cbi5FRkRUTCB7XG4gICAgcGFkZGluZzogMTVweCAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNTNkM2ExNztcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5iT2doWVEgc3ZnIHtcbiAgICBmaWxsOiByZ2IoMTE5LCAxMTksIDExOSk7XG4gICAgdHJhbnNpdGlvbjogZmlsbCAyMDBtcyBlYXNlIDBzO1xufVxuXG4uYm9ET21TIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XG4gICAgbWluLXdpZHRoOiAzNjBweDtcbiAgICBtaW4taGVpZ2h0OiA1NDBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNTAsIDUwLCA1MCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZk9hQlFjIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG59XG5cbi5nWXlIeEoge1xuICAgIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYkNUeXdXIHtcbiAgICB3aWR0aDogMTJweDtcbn1cblxuLmJPZ2hZUSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5kZWN5cGhlckxvZ28ge1xuICAgIGZpbGw6ICMxNjE2MTE7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNXB4IHJnYigyLCAyLCAyKSk7XG59XG5cbi5oZWFkZXJfdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LWZhbWlseTogJ0dsYWNpYWwgSW5kaWZmZXJlbmNlJywgc2Fucy1zZXJpZjtcbn1cblxuLmN1c3RvbS0xZ2djemtiIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggY2lyY2xlIGF0IGNlbnRlciwgIzMzMzUzZCAxcHgsICMzMDMyMzggMXB4LCB0cmFuc3BhcmVudCAxcHgsIHRyYW5zcGFyZW50IDEwMCUpO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTMwcHg7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDdweCA3cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2cHggNnB4O1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC44MDEpLCB0cmFuc3BhcmVudCA4MCUpO1xuICAgIG1hc2staW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuODAxKSwgdHJhbnNwYXJlbnQgODAlKTtcbn1cblxuLm9uYm9hcmRpbmdfYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItY29sb3I6ICMxZDIwMzA7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3gtc2hhZG93OiAwIDAgNnB4ICMwNTA1MDU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xufVxuXG4ub25ib2FyZGluZ19idXR0b246aG92ZXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4xcztcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcik7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAwICMwNTA1MDU7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdfY29sb3IpXG59XG5cbi5vbmJvYXJkaW5nX2J1dHRvbjphY3RpdmUge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4xcztcbiAgICBib3JkZXItY29sb3I6ICMzN2JlNzA7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAwICMwNTA1MDU7XG4gICAgY29sb3I6ICMzN2JlNzA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdfY29sb3IpXG59XG5cbi5kaXNhYmxlZG9uYm9hcmRpbmdfYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1iZ19jb2xvcl8yKTtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJveC1zaGFkb3c6IDAgMCA2cHggIzA1MDUwNTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMXM7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBmb250LXNpemU6IDIycHhcbn1cblxuLm91dGxpbmVzX29ubHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLm91dGxpbmVzX29ubHk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgY29sb3I6IHJnYigyNDgsIDUwLCAxMTYpO1xufVxuXG4ud2VsY29tZVRleHRbZGF0YS12LTU4NmNiNjRkXSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjOTA5MDg3O1xuICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJlLCBzYW5zLXNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0cHg7XG59XG5cbmEge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluX2NvbG9yXzEpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogMDtcbn1cblxuYTpob3ZlciB7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4IHZhcigtLW1haW5fY29sb3JfMSk7XG59Il19 */"] });


/***/ }),

/***/ 78660:
/*!*********************************************************************!*\
  !*** ./src/app/components/pincode-input/pincode-input.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PincodeInputComponent": () => (/* binding */ PincodeInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);


class PincodeInputComponent {
    constructor() {
        this.inputText = [];
        this.inputTextEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.inputType = "number";
        this.placeholder = "add a placeholder u idiot";
        this.pinBoxHeight = 28;
        this.pinBoxWidth = 75;
    }
    onInputKey(event, nextField) {
        var _a, _b, _c;
        if (event.keyCode == 8) {
            if (Number(nextField) - 2 > 1) {
                (_a = document.getElementById((Number(nextField) - 2).toString())) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else {
                (_b = document.getElementById('1')) === null || _b === void 0 ? void 0 : _b.focus();
            }
        }
        if (event.target.value != "") {
            if (event.target.value.match(/^[0-9]+$/) == null) {
                event.target.value = "";
                return;
            }
            if (Number(nextField) <= 6) {
                (_c = document.getElementById(nextField)) === null || _c === void 0 ? void 0 : _c.focus();
            }
        }
        this.inputText[Number(nextField) - 1] = event.target.value;
        this.inputTextEvent.emit(this.inputText);
    }
    ngOnInit() {
    }
}
PincodeInputComponent.ɵfac = function PincodeInputComponent_Factory(t) { return new (t || PincodeInputComponent)(); };
PincodeInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PincodeInputComponent, selectors: [["app-pincode-input"]], inputs: { inputType: "inputType", placeholder: "placeholder", pinBoxWidth: "pinBoxWidth", pinBoxHeight: "pinBoxHeight" }, outputs: { inputTextEvent: "inputTextEvent" }, decls: 7, vars: 24, consts: [["type", "password", "maxlength", "1", "id", "1", 1, "pin_input2", 3, "keyup"], ["type", "password", "maxlength", "1", "id", "2", 1, "pin_input2", 3, "keyup"], ["type", "password", "maxlength", "1", "id", "3", 1, "pin_input2", 3, "keyup"], ["type", "password", "maxlength", "1", "id", "4", 1, "pin_input2", 3, "keyup"], ["type", "password", "maxlength", "1", "id", "5", 1, "pin_input2", 3, "keyup"], ["type", "password", "maxlength", "1", "id", "6", 1, "pin_input2", 3, "keyup"]], template: function PincodeInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PincodeInputComponent_Template_input_keyup_1_listener($event) { return ctx.onInputKey($event, "2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PincodeInputComponent_Template_input_keyup_2_listener($event) { return ctx.onInputKey($event, "3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PincodeInputComponent_Template_input_keyup_3_listener($event) { return ctx.onInputKey($event, "4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PincodeInputComponent_Template_input_keyup_4_listener($event) { return ctx.onInputKey($event, "5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PincodeInputComponent_Template_input_keyup_5_listener($event) { return ctx.onInputKey($event, "6"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PincodeInputComponent_Template_input_keyup_6_listener($event) { return ctx.onInputKey($event, "7"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.pinBoxWidth, "px")("height", ctx.pinBoxHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.pinBoxWidth, "px")("height", ctx.pinBoxHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.pinBoxWidth, "px")("height", ctx.pinBoxHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.pinBoxWidth, "px")("height", ctx.pinBoxHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.pinBoxWidth, "px")("height", ctx.pinBoxHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.pinBoxWidth, "px")("height", ctx.pinBoxHeight, "px");
    } }, styles: [".pin_input[_ngcontent-%COMP%] {\n  padding: 5px;\n  background-color: rgba(0, 0, 0, 0);\n  border-width: 2px;\n  border-color: var(--main_color_1);\n  border-style: hidden;\n  color: white;\n  border-bottom-style: solid;\n  margin: 6px;\n  text-align: center;\n  background-color: #0f0f0f;\n  border-radius: 5px;\n  font-size: 18px;\n}\n\n.pin_input2[_ngcontent-%COMP%] {\n  padding: 4px;\n  background-color: #0000;\n  border-width: 2px;\n  border-color: #18ff6a;\n  border-style: hidden;\n  color: #fff;\n  border-bottom-style: solid;\n  margin: 6px;\n  box-shadow: 0 0 8px #0e100f;\n  text-align: center;\n  border-radius: 8px;\n  background-color: #070708;\n  border-radius: 4px;\n  font-size: 18px;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbmNvZGUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoicGluY29kZS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waW5faW5wdXQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucGluX2lucHV0MiB7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1jb2xvcjogIzE4ZmY2YTtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICBtYXJnaW46IDZweDtcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4ICMwZTEwMGY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwNzA4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"] });


/***/ }),

/***/ 98969:
/*!***************************************************************************!*\
  !*** ./src/app/components/popup/connect-popup/connect-popup.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectPopupComponent": () => (/* binding */ ConnectPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _d_app_connection_module_d_app_connection_module_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../d-app-connection-module/d-app-connection-module.component */ 48298);





function ConnectPopupComponent_h4_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Connected to ", ctx_r0.connectedPorts.length, " Apps ");
} }
function ConnectPopupComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-d-app-connection-module", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("moduleClick", function ConnectPopupComponent_div_7_div_1_Template_app_d_app_connection_module_moduleClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.openConnectionModal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const port_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("url", port_r5.sender.origin)("siteFavicon", port_r5.sender.tab.favIconUrl)("tabId", port_r5.sender.tab.id);
} }
function ConnectPopupComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConnectPopupComponent_div_7_div_1_Template, 2, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.connectedPorts);
} }
function ConnectPopupComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "g", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Not connected to anywhere! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " You can connect to any app by connecting as metamask! More connection options coming soon...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ConnectPopupComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "g", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Not connected to anywhere! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " You can connect to any app by connecting as metamask! More connection options coming soon...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ConnectPopupComponent {
    constructor() {
        this.currentPopup = src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.CurrentPopups;
        this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.openConnectionModalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.popupState = this.currentPopup.SEND_POPUP;
        this.showPopup = false;
    }
    ngOnInit() {
    }
    closePopupButton() {
        this.closePopup.emit();
    }
    openConnectionModal(tabId) {
        this.openConnectionModalEvent.emit(tabId);
    }
}
ConnectPopupComponent.ɵfac = function ConnectPopupComponent_Factory(t) { return new (t || ConnectPopupComponent)(); };
ConnectPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConnectPopupComponent, selectors: [["app-connect-popup"]], inputs: { popupState: "popupState", showPopup: "showPopup", connectedPorts: "connectedPorts" }, outputs: { closePopup: "closePopup", openConnectionModalEvent: "openConnectionModalEvent" }, decls: 10, vars: 4, consts: [[1, "container_flex"], [1, "inner_flex_container", 2, "justify-content", "center", "align-items", "center"], [2, "height", "360px", "width", "100%", "display", "flex", "align-items", "center", "flex-direction", "column"], [2, "height", "70px", "width", "100%"], ["style", "margin-top: 10px; margin-bottom: 0px;", 4, "ngIf"], [1, "item_list", 2, "height", "100%", "margin", "5px", "margin-bottom", "10px", "width", "300px", "padding-top", "10px"], [4, "ngIf"], ["style", "display: flex; justify-content: center; align-content: center; height: 100%;", 4, "ngIf"], [2, "margin-top", "10px", "margin-bottom", "0px"], [4, "ngFor", "ngForOf"], [3, "url", "siteFavicon", "tabId", "moduleClick"], [2, "display", "flex", "justify-content", "center", "align-content", "center", "height", "100%"], [2, "width", "98%"], ["id", "svg", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "80", "height", "80", "viewBox", "0, 0, 400,398.96907216494844", "version", "1.1", 2, "filter", "drop-shadow(0px 0px 1px rgb(15, 15, 15))"], ["id", "svgg"], ["id", "path0", "d", "M58.969 43.531 C 36.323 45.843,18.644 62.421,14.176 85.537 L 13.711 87.938 13.649 192.990 C 13.584 304.128,13.551 300.121,14.565 305.142 C 18.835 326.283,36.207 342.285,58.041 345.190 C 61.105 345.597,339.720 345.597,342.784 345.190 C 365.917 342.112,383.149 325.039,386.737 301.640 C 387.173 298.795,387.443 98.048,387.020 91.309 C 385.491 66.968,368.774 48.310,344.522 43.873 L 341.959 43.404 201.340 43.378 C 123.162 43.364,59.943 43.432,58.969 43.531 M320.044 66.918 C 339.940 69.658,355.256 85.199,357.722 105.149 C 358.025 107.597,358.024 281.277,357.721 283.717 C 355.192 304.104,339.224 319.777,318.660 322.059 C 316.116 322.341,84.526 322.343,81.959 322.061 C 61.303 319.790,45.189 303.760,42.891 283.196 C 42.510 279.781,42.612 107.765,42.997 104.804 C 45.537 85.284,60.457 70.005,79.897 67.015 C 83.428 66.472,316.123 66.378,320.044 66.918 M124.055 117.990 C 119.331 123.003,115.205 127.927,115.304 128.433 C 115.434 129.096,138.322 139.126,140.155 139.323 L 141.237 139.439 141.237 138.817 C 141.237 137.517,140.546 136.313,132.825 124.175 C 129.705 119.271,127.035 115.258,126.891 115.258 C 126.747 115.258,125.470 116.487,124.055 117.990 M267.437 124.794 C 257.565 140.314,257.420 140.908,264.178 138.157 C 266.830 137.077,285.313 128.776,285.516 128.574 C 285.925 128.164,274.494 115.258,273.722 115.258 C 273.601 115.258,270.773 119.549,267.437 124.794 M131.087 145.484 C 130.443 145.681,129.726 146.150,128.978 146.861 C 127.338 148.421,100.281 181.376,99.757 182.453 C 98.425 185.187,99.604 187.757,102.644 188.743 C 105.274 189.597,152.966 200.264,154.227 200.280 C 156.699 200.312,157.806 199.232,157.684 196.907 C 157.596 195.239,137.308 149.152,135.743 147.066 C 134.666 145.631,132.740 144.976,131.087 145.484 M267.470 145.357 C 266.541 145.577,265.290 146.482,264.666 147.388 C 264.170 148.106,244.425 192.280,243.382 195.005 C 242.149 198.224,243.335 200.308,246.380 200.278 C 248.176 200.260,297.585 189.049,298.969 188.345 C 301.941 186.834,302.288 183.861,299.844 180.837 C 295.226 175.122,272.124 147.177,271.654 146.737 C 270.414 145.579,268.795 145.044,267.470 145.357 M199.083 235.527 C 198.782 236.142,198.242 238.063,197.852 239.909 C 196.598 245.842,195.677 247.850,192.990 250.515 C 188.682 254.788,183.902 256.152,177.076 255.056 C 172.205 254.274,171.365 256.258,175.615 258.506 C 180.666 261.178,186.802 260.905,195.696 257.614 C 199.799 256.095,200.012 256.094,204.021 257.574 C 205.722 258.203,207.676 258.874,208.363 259.065 L 209.612 259.414 209.937 260.799 C 210.285 262.281,211.362 264.998,211.863 265.659 C 212.340 266.290,214.868 263.561,215.987 261.208 L 216.344 260.456 218.320 260.208 C 222.923 259.628,226.969 257.473,226.765 255.709 C 226.643 254.660,225.947 254.551,222.623 255.061 C 215.739 256.118,211.028 254.740,206.692 250.403 C 204.152 247.862,203.171 245.604,201.773 239.082 C 200.839 234.725,200.011 233.630,199.083 235.527 ", "stroke", "none", "fill", "#181818", "fill-rule", "evenodd"], [2, "margin", "4px", "font-weight", "bold", "margin-bottom", "10px", "margin-top", "0px", "font-size", "13px", "color", "rgb(15, 15, 15)"]], template: function ConnectPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ConnectPopupComponent_h4_4_Template, 2, 1, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ConnectPopupComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ConnectPopupComponent_div_8_Template, 11, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ConnectPopupComponent_div_9_Template, 11, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.connectedPorts != null && ctx.connectedPorts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.connectedPorts != null && ctx.connectedPorts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.connectedPorts != null && ctx.connectedPorts.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.connectedPorts == null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _d_app_connection_module_d_app_connection_module_component__WEBPACK_IMPORTED_MODULE_1__.DAppConnectionModuleComponent], styles: [".connect_button[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  padding: 8px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: white;\n  border: 2px;\n  border-style: solid;\n  border-color: var(--main_color_1);\n  border-radius: 50px;\n  font-family: Calibre;\n  font-weight: bold;\n  font-size: 13px;\n  box-shadow: 0px 0px 0px #ff3747;\n  overflow: hidden;\n  width: 160px;\n  height: 30px;\n  transition-duration: 120ms;\n}\n\n.connect_button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 12px #ff283a;\n  border-color: var(--main_color_1);\n  background-color: var(--main_color_1);\n  transition-duration: 120ms;\n  cursor: pointer;\n}\n\n.connect_button[_ngcontent-%COMP%]:active {\n  box-shadow: 0px 0px 8px #ff283a;\n  background-color: #bd0039;\n  border-color: #bd0039;\n  transition-duration: 120ms;\n  cursor: pointer;\n}\n\n.container_flex[_ngcontent-%COMP%] {\n  margin: 0px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-size: cover;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n}\n\n.flex_row[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n\n.shadow_box[_ngcontent-%COMP%] {\n  background-color: var(--darker_background_color);\n  position: relative;\n  display: flex;\n  overflow-wrap: normal;\n  border-radius: 5px;\n  box-shadow: 0px 0px var(--shadow_size) var(--shadow_color);\n  margin-top: 5px;\n  margin-bottom: 5px;\n  width: 90%;\n  height: 100px;\n}\n\n.inner_flex_container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n  padding: 2px;\n  background-size: cover;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  align-items: flex-start;\n}\n\n.item_list[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  border-radius: 8px;\n  border-width: 0px;\n  background-color: var(--darker_background_color);\n  height: 100%;\n  width: 100%;\n  box-shadow: 0px 0px 6px black inset;\n  justify-content: center;\n  overflow: hidden;\n  overflow-y: scroll;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n*[_ngcontent-%COMP%] {\n  scrollbar-width: 0px;\n  scrollbar-color: rgba(34, 34, 34, 0) rgba(34, 34, 34, 0);\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(34, 34, 34, 0);\n  border-radius: 0px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(34, 34, 34, 0);\n  border-radius: 0px;\n  border: 0px solid rgba(34, 34, 34, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3QtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMERBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksT0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdEQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFJQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksb0JBQUE7RUFDQSx3REFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUdBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0kscUNBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FBQUoiLCJmaWxlIjoiY29ubmVjdC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25uZWN0X2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCByZ2IoMjU1LCA1NSwgNzEpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjBtcztcbn1cblxuLmNvbm5lY3RfYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggcmdiKDI1NSwgNDAsIDU4KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjBtcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb25uZWN0X2J1dHRvbjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYigyNTUsIDQwLCA1OCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgMCwgNTcpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4OSwgMCwgNTcpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEyMG1zO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRhaW5lcl9mbGV4IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mbGV4X3JvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnNoYWRvd19ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlcl9iYWNrZ3JvdW5kX2NvbG9yKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggdmFyKC0tc2hhZG93X3NpemUpIHZhcigtLXNoYWRvd19jb2xvcik7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbi5pbm5lcl9mbGV4X2NvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLml0ZW1fbGlzdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlcl9iYWNrZ3JvdW5kX2NvbG9yKTtcbiAgICAvL2JveC1zaGFkb3c6IDBweCAwcHggdmFyKC0tc2hhZG93X3NpemUpICB2YXIoLS1zaGFkb3dfY29sb3IpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCBibGFjayBpbnNldDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbioge1xuICAgIHNjcm9sbGJhci13aWR0aDogMHB4O1xuICAgIHNjcm9sbGJhci1jb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAwKSByZ2JhKDM0LCAzNCwgMzQsIDApO1xufVxuXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDBweDtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsIDM0LCAzNCwgMCk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAwKTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgzNCwgMzQsIDM0LCAwKTtcbn0iXX0= */"] });


/***/ }),

/***/ 74082:
/*!*****************************************************!*\
  !*** ./src/app/components/popup/popup.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupComponent": () => (/* binding */ PopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../default-button/default-button.component */ 43775);
/* harmony import */ var _send_popup_send_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send-popup/send-popup.component */ 54575);
/* harmony import */ var _connect_popup_connect_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect-popup/connect-popup.component */ 98969);







function PopupComponent_app_send_popup_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-send-popup", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tokenArray", ctx_r0.tokenArray)("currentDjtxAmount", ctx_r0.currentDjtxAmount)("walletState", ctx_r0.walletState)("isPopupOpen", ctx_r0.showPopup);
} }
function PopupComponent_app_connect_popup_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-connect-popup", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("openConnectionModalEvent", function PopupComponent_app_connect_popup_3_Template_app_connect_popup_openConnectionModalEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.openConnectionModal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("connectedPorts", ctx_r1.connectedPorts);
} }
function PopupComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " This text is not supposed to be possible, ask the devs if they can do something. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class PopupComponent {
    constructor() {
        this.currentPopup = src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.CurrentPopups;
        this.tokenArray = null;
        this.currentDjtxAmount = '';
        this.walletState = null;
        this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.openConnectionModalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.popupState = this.currentPopup.SEND_POPUP;
        this.showPopup = false;
    }
    ngOnInit() {
    }
    closePopupButton() {
        this.closePopup.emit();
    }
    openConnectionModal(tabId) {
        this.openConnectionModalEvent.emit(tabId);
    }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) { return new (t || PopupComponent)(); };
PopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PopupComponent, selectors: [["app-popup"]], inputs: { popupState: "popupState", showPopup: "showPopup", tokenArray: "tokenArray", currentDjtxAmount: "currentDjtxAmount", connectedPorts: "connectedPorts", walletState: "walletState" }, outputs: { closePopup: "closePopup", openConnectionModalEvent: "openConnectionModalEvent" }, decls: 7, vars: 4, consts: [[1, "popup_box", 3, "ngClass"], [3, "ngSwitch"], [3, "tokenArray", "currentDjtxAmount", "walletState", "isPopupOpen", 4, "ngSwitchCase"], [3, "connectedPorts", "openConnectionModalEvent", 4, "ngSwitchCase"], ["style", "display: flex; justify-content: center; align-items: center;", 4, "ngSwitchDefault"], ["text", "\u2304", 1, "clickety_button", 2, "text-align", "center", "width", "300px", "height", "30px", "position", "absolute", "top", "20px", "left", "6%", 3, "click"], [1, "line"], [3, "tokenArray", "currentDjtxAmount", "walletState", "isPopupOpen"], [3, "connectedPorts", "openConnectionModalEvent"], [2, "display", "flex", "justify-content", "center", "align-items", "center"], [2, "width", "200px"]], template: function PopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PopupComponent_app_send_popup_2_Template, 1, 4, "app-send-popup", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PopupComponent_app_connect_popup_3_Template, 1, 1, "app-connect-popup", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PopupComponent_div_4_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-default-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PopupComponent_Template_app_default_button_click_5_listener() { return ctx.closePopupButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.showPopup == false ? "collapsed" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.popupState);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx.currentPopup.SEND_POPUP);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx.currentPopup.CONNECT_POPUP);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchDefault, _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_1__.DefaultButtonComponent, _send_popup_send_popup_component__WEBPACK_IMPORTED_MODULE_2__.SendPopupComponent, _connect_popup_connect_popup_component__WEBPACK_IMPORTED_MODULE_3__.ConnectPopupComponent], styles: [".popup_box[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 100%;\n  position: fixed;\n  overflow: hidden;\n  background-color: var(--main_background_color);\n  top: 28%;\n  z-index: 1;\n  transition-duration: 250ms;\n  border: none;\n  border-top: solid;\n  border-top-width: 2px;\n  border-color: var(--main_color_1);\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\n[_ngcontent-%COMP%]::selection {\n  background: var(--main_color_1);\n}\n\n.collapsed[_ngcontent-%COMP%] {\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  top: 99.6%;\n  transition-duration: 250ms;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQVBKOztBQVVBO0VBQ0ksK0JBQUE7QUFQSjs7QUFVQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUFQSiIsImZpbGUiOiJwb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLmxpbmUge1xuLy8gIGhlaWdodDogMnB4O1xuLy8gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4vLyAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgd2lkdGg6IDEwMCU7XG4vLyAgdG9wOiAwO1xuLy99XG4ucG9wdXBfYm94IHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5fYmFja2dyb3VuZF9jb2xvcik7XG4gICAgdG9wOiAyOCU7XG4gICAgei1pbmRleDogMTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogc29saWQ7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW5fY29sb3JfMSk7XG59XG5cbi5jb2xsYXBzZWQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgIHRvcDogOTkuNiU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG59Il19 */"] });


/***/ }),

/***/ 54575:
/*!*********************************************************************!*\
  !*** ./src/app/components/popup/send-popup/send-popup.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendPopupComponent": () => (/* binding */ SendPopupComponent)
/* harmony export */ });
/* harmony import */ var _Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ 40342);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bignumber.js */ 84098);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _input_fancy_input_fancy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../input-fancy/input-fancy.component */ 17427);
/* harmony import */ var _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../default-button/default-button.component */ 43775);
/* harmony import */ var _fee_box_fee_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../fee-box/fee-box.component */ 57544);
/* harmony import */ var _tx_module_tx_module_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tx-module/tx-module.component */ 54190);










function SendPopupComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " DJTX ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function SendPopupComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedToken.tokenSymbol, " ");
  }
}

function SendPopupComponent_h4_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please enter a valid recipent address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function SendPopupComponent_h4_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Sorry, but you don't have enough funds to cover this tx ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function SendPopupComponent_h4_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You don't have enough funds to cover the tx fees ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function SendPopupComponent_h4_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Estimating Gas prices... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function SendPopupComponent_app_fee_box_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-fee-box", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectGasPrice", function SendPopupComponent_app_fee_box_19_Template_app_fee_box_selectGasPrice_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r14.selectGasPrice($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("priorityGasPrice", ctx_r6.gasRecomendation.priorityFee)("baseGasPrice", ctx_r6.gasRecomendation.baseFee)("estimatedTxFee", ctx_r6.gasRecomendation.estimatedTxFee);
  }
}

function SendPopupComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " You are about to send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " DJTX To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " With a fee of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " DJTX ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.currentAmountToSend);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r7.currentRecipent, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.gasRecomendation.estimatedTxFee);
  }
}

function SendPopupComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " With a fee of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " DJTX ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.currentAmountToSend);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r8.selectedToken.tokenSymbol, " To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r8.currentRecipent, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.gasRecomendation.estimatedTxFee);
  }
}

function SendPopupComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Sending Tx...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function SendPopupComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Transaction Sent!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Bet you! By the time you finish reading this sentence, the Dijets you sent have already been received. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "g", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function SendPopupComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-default-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SendPopupComponent_div_33_Template_app_default_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r16.openTxInExplorer();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-default-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SendPopupComponent_div_33_Template_app_default_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r18.returnButton();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("height", 35)("width", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("height", 35)("width", 115);
  }
}

function SendPopupComponent_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-tx-module", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("moduleClick", function SendPopupComponent_div_38_div_1_Template_app_tx_module_moduleClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r21.selectToken($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const token_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tokenInfo", token_r20);
  }
}

function SendPopupComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SendPopupComponent_div_38_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-default-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("buttonClick", function SendPopupComponent_div_38_Template_app_default_button_buttonClick_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r23.selectToken(null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r12.tokenArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", 100)("height", 28);
  }
}

function SendPopupComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "svg", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "g", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " No tokens found... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " You at least have some DJTX right? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "[\u2565\uFE4F\u2565] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

var TxStates;

(function (TxStates) {
  TxStates[TxStates["NONE"] = 0] = "NONE";
  TxStates[TxStates["TX_SENT"] = 1] = "TX_SENT";
  TxStates[TxStates["GET_GAS"] = 2] = "GET_GAS";
  TxStates[TxStates["VERIFY_TX"] = 3] = "VERIFY_TX";
  TxStates[TxStates["READY_TO_SEND"] = 4] = "READY_TO_SEND";
  TxStates[TxStates["INSUFFICIENT_FUNDS"] = 5] = "INSUFFICIENT_FUNDS";
  TxStates[TxStates["INCORRECT_RECIPENT_ADDRESS"] = 6] = "INCORRECT_RECIPENT_ADDRESS";
  TxStates[TxStates["INSUFFICIENT_FUNDS_FOR_TX_FEE"] = 7] = "INSUFFICIENT_FUNDS_FOR_TX_FEE";
})(TxStates || (TxStates = {}));

class SendPopupComponent {
  constructor() {
    this.isPopupOpen = false;
    this.currentDjtxAmount = '';
    this.tokenArray = null;
    this.selectedToken = null;
    this.walletState = null;
    this.txStates = TxStates;
    this.currentTxState = TxStates.NONE;
    this.currentTxHash = '';
    this.isSelectingToken = false;
    this.gettingGas = false;
    this.currentAmountToSend = '';
    this.currentRecipent = '';
    this.gasRecomendation = {
      gasLimit: '',
      baseFee: '',
      priorityFee: 'loading',
      estimatedTxFee: '~'
    };
    this.selectedPriorityGas = ''; //this.getTxFeeEstimates(true);
  }

  ngOnInit() {}

  toggleChangeAsset(toggleTo) {
    this.isSelectingToken = toggleTo == null ? !this.isSelectingToken : toggleTo;
  }

  selectToken(token) {
    var _this = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.selectedToken = token == null ? null : token;

      _this.toggleChangeAsset(false);

      _this.selectedPriorityGas = '';
      yield _this.updateTxState();
    })();
  }

  updateRecipent(event) {
    var _this2 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.currentRecipent = event;

      _this2.updateTxState();

      yield _this2.updateTxState();
    })();
  }

  updateAmount(event) {
    var _this3 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.currentAmountToSend = event;
      yield _this3.updateTxState();
    })();
  }

  updateTxState() {
    var _this4 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //If the token is null, then we are sending AVAX, otherwise, we are sending de token...
      if (_this4.selectedToken == null) {
        if (Number(_this4.currentAmountToSend) > Number(_this4.currentDjtxAmount)) {
          _this4.currentTxState = _this4.txStates.INSUFFICIENT_FUNDS;
          return;
        }

        if (_this4.currentRecipent != "" && ethers__WEBPACK_IMPORTED_MODULE_7__.isAddress(_this4.currentRecipent)) {
          if (Number(_this4.currentAmountToSend) > 0) {
            _this4.currentTxState = _this4.txStates.GET_GAS;
            yield _this4.getTxFeeEstimates(false);
          } else {
            _this4.currentTxState = _this4.txStates.NONE;
          }
        } else {
          _this4.currentTxState = _this4.txStates.INCORRECT_RECIPENT_ADDRESS;
        }
      } else {
        if (Number(_this4.currentAmountToSend) > _this4.selectedToken.tokenBalance) {
          _this4.currentTxState = _this4.txStates.INSUFFICIENT_FUNDS;
          return;
        }

        if (ethers__WEBPACK_IMPORTED_MODULE_7__.isAddress(_this4.currentRecipent)) {
          if (Number(_this4.currentAmountToSend) > 0) {
            _this4.currentTxState = _this4.txStates.GET_GAS;
            yield _this4.getTxFeeEstimates(false);
          } else {
            _this4.currentTxState = _this4.txStates.NONE;
          }
        } else {
          _this4.currentTxState = _this4.txStates.INCORRECT_RECIPENT_ADDRESS;
        }
      }
    })();
  } //Just gets a fee estimate for the current transaction


  getTxFeeEstimates(repeat) {
    var _this5 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.currentTxState == _this5.txStates.GET_GAS || _this5.txStates.READY_TO_SEND) {
        if (_this5.walletState != null && _this5.isPopupOpen == true) {
          let gas = yield _this5.walletState.getGasEstimates(_this5.currentRecipent, String(_this5.currentAmountToSend), _this5.selectedToken);
          _this5.gasRecomendation.baseFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_1__.BigNumber(gas.baseFee).div(1000000000).toString();
          _this5.gasRecomendation.priorityFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_1__.BigNumber(gas.priorityFee).div(1000000000).plus(_this5.gasRecomendation.baseFee).toString();
          _this5.gasRecomendation.gasLimit = gas.gasLimit;

          if (_this5.selectedPriorityGas == "") {
            _this5.gasRecomendation.estimatedTxFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_1__.BigNumber(Number(gas.gasLimit) * Number(_this5.gasRecomendation.baseFee)).div(1000000000).toString();
            _this5.selectedPriorityGas = '0';
          } else {
            //this.gasRecomendation.estimatedTxFee = new BigNumber(Number(gas.gasLimit) * Number(this.selectedPriorityGas)).div(1000000000).toString();
            _this5.gasRecomendation.estimatedTxFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_1__.BigNumber(Number(_this5.gasRecomendation.gasLimit) * (Number(_this5.selectedPriorityGas) + Number(_this5.gasRecomendation.baseFee))).div(1000000000).toString();
          } //console.log(this.gasRecomendation);


          if (_this5.selectedToken == null) {
            if (Number(_this5.currentDjtxAmount) < Number(_this5.currentAmountToSend)) {
              _this5.currentTxState = _this5.txStates.INSUFFICIENT_FUNDS;
            } else if (Number(_this5.currentDjtxAmount) < Number(_this5.currentAmountToSend) + Number(_this5.gasRecomendation.estimatedTxFee)) {
              _this5.currentTxState = _this5.txStates.INSUFFICIENT_FUNDS_FOR_TX_FEE;
            } else {
              _this5.currentTxState = _this5.txStates.READY_TO_SEND;
            }
          } else {
            if (_this5.selectedToken.tokenBalance < Number(_this5.currentAmountToSend)) {
              _this5.currentTxState = _this5.txStates.INSUFFICIENT_FUNDS;
            } else if (Number(_this5.currentDjtxAmount) < Number(_this5.gasRecomendation.estimatedTxFee)) {
              _this5.currentTxState = _this5.txStates.INSUFFICIENT_FUNDS_FOR_TX_FEE;
            } else {
              _this5.currentTxState = _this5.txStates.READY_TO_SEND;
            }
          }
        }
      } //if(repeat) {
      //  setInterval(async () => {
      //    this.getTxFeeEstimates(false);
      //  }, 3500);
      //}

    })();
  }

  selectGasPrice(event) {
    this.selectedPriorityGas = (Number(event) - Number(this.gasRecomendation.baseFee)).toString();
    this.gasRecomendation.estimatedTxFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_1__.BigNumber(Number(this.gasRecomendation.gasLimit) * Number(this.selectedPriorityGas)).div(1000000000).toString(); // this.gasRecomendation.estimatedTxFee = new BigNumber(Number(this.gasRecomendation.gasLimit) * (Number(this.selectedPriorityGas))).div(1000000000).toString();
  }

  sendButton() {
    var _this6 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.currentTxState == _this6.txStates.READY_TO_SEND) {
        _this6.currentTxState = _this6.txStates.VERIFY_TX;
        return;
      }

      if (_this6.currentTxState == _this6.txStates.VERIFY_TX) {
        if (_this6.walletState != null) {
          _this6.currentTxState = _this6.txStates.TX_SENT;
          let tx = yield _this6.walletState.sendTx(_this6.currentRecipent, String(_this6.currentAmountToSend), "0x" + new bignumber_js__WEBPACK_IMPORTED_MODULE_1__.BigNumber(_this6.gasRecomendation.baseFee).plus(_this6.selectedPriorityGas).times(1000000000).toString(16), "0x" + new bignumber_js__WEBPACK_IMPORTED_MODULE_1__.BigNumber(_this6.selectedPriorityGas).times(1000000000).toString(16), _this6.gasRecomendation.gasLimit, _this6.selectedToken);
          _this6.currentTxHash = tx.data['result']; //console.log(tx);
        }
      }
    })();
  }

  cancelTxButton() {
    this.currentTxState = this.txStates.READY_TO_SEND;
  }

  returnButton() {
    this.currentTxState = this.txStates.READY_TO_SEND;
    this.currentTxHash = '';
  }

  openTxInExplorer() {
    if (this.walletState != null && this.currentTxHash != '') {
      this.walletState.openTxInExplorer(this.currentTxHash);
    }
  }

}

SendPopupComponent.ɵfac = function SendPopupComponent_Factory(t) {
  return new (t || SendPopupComponent)();
};

SendPopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: SendPopupComponent,
  selectors: [["app-send-popup"]],
  inputs: {
    isPopupOpen: "isPopupOpen",
    currentDjtxAmount: "currentDjtxAmount",
    tokenArray: "tokenArray",
    selectedToken: "selectedToken",
    walletState: "walletState"
  },
  decls: 43,
  vars: 30,
  consts: [[1, "container_flex"], [1, "inner_flex_container", 2, "justify-content", "center", "align-items", "center", "height", "450px", 3, "ngClass"], [2, "height", "325px", "width", "100%"], ["inputType", "number", "placeholder", "Amount", 3, "inputWidth", "inputHeight", "inputTextEvent"], [2, "margin-top", "12px"], ["inputType", "", "placeholder", "Recipent", 3, "inputWidth", "inputHeight", "inputTextEvent"], [1, "current_asset_box", 2, "justify-content", "space-evenly", "margin-top", "10px"], ["text", "Change Asset", 3, "height", "width", "buttonClick"], [1, "asset_text"], [2, "text-align", "center", "align-self", "center", "font-size", "18px", "font-family", "Calibre-Regular", "letter-spacing", "2px", "font-weight", "bold", "margin-top", "0px"], [4, "ngIf"], [2, "font-size", "12px", "font-family", "Calibre, sans-serif", "font-weight", "normal", "padding", "20px", "margin", "0px"], ["class", "", 4, "ngIf"], [2, "position", "fixed", "width", "100%", "top", "214px"], [3, "priorityGasPrice", "baseGasPrice", "estimatedTxFee", "selectGasPrice", 4, "ngIf"], [2, "position", "fixed", "width", "100%", "top", "342px"], [3, "ngClass", "click"], [1, "inner_flex_container", 2, "justify-content", "center", "align-items", "flex-start", "height", "450px", 3, "ngClass"], [3, "ngClass"], ["class", "container_flex", "style", "width: 100%; height: 270px; padding: 15px; padding-bottom: 25px; box-sizing: border-box;", 4, "ngIf"], [2, "position", "fixed", "width", "100%", "top", "318px", "display", "flex", "justify-content", "space-evenly"], ["text", "Cancel", 3, "height", "width", "click"], ["text", "Send", 3, "height", "width", "click"], ["style", "position: fixed; width: 100%; top: 318px; display: flex; justify-content: space-evenly;", 4, "ngIf"], [2, "height", "325px", "width", "100%", "justify-content", "center", "align-items", "center", "display", "flex", "flex-direction", "column", "margin-bottom", "45px"], [1, "item_list", 2, "height", "250px", "margin", "5px", "margin-bottom", "10px", "width", "300px", "padding-top", "10px"], ["style", "display: flex; justify-content: center; align-content: center; height: 100%;", 4, "ngIf"], [1, "send_button", 3, "click"], [1, ""], [3, "priorityGasPrice", "baseGasPrice", "estimatedTxFee", "selectGasPrice"], [1, "container_flex", 2, "width", "100%", "height", "270px", "padding", "15px", "padding-bottom", "25px", "box-sizing", "border-box"], [2, "width", "100%", "font-family", "Calibre, sans-serif", "font-size", "14px", "letter-spacing", "0.6px", "text-align", "center", "margin-bottom", "12px"], [1, "glowyText"], [1, "address_box"], [2, "width", "100%", "text-align", "center", "margin-bottom", "10px"], [1, "lds-ripple"], [1, "ticks"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.8C5.188 1.802 8.25 1.25 10.75 2.25", "stroke", "#42DF6E", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "m5.75 7.75 2.5 2.5 6-6.5", "stroke", "#42DF6E", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "svg", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "100", "height", "100", "viewBox", "0, 0, 400,398.96907216494844", "version", "1.1", 2, "filter", "drop-shadow(0px 0px 2px var(--main_color_1))", "fill", "var(--main_color_1)", "position", "absolute", "top", "180px"], ["id", "svgg"], ["id", "path0", "d", "M58.969 43.531 C 36.323 45.843,18.644 62.421,14.176 85.537 L 13.711 87.938 13.649 192.990 C 13.584 304.128,13.551 300.121,14.565 305.142 C 18.835 326.283,36.207 342.285,58.041 345.190 C 61.105 345.597,339.720 345.597,342.784 345.190 C 365.917 342.112,383.149 325.039,386.737 301.640 C 387.173 298.795,387.443 98.048,387.020 91.309 C 385.491 66.968,368.774 48.310,344.522 43.873 L 341.959 43.404 201.340 43.378 C 123.162 43.364,59.943 43.432,58.969 43.531 M320.044 66.918 C 339.940 69.658,355.256 85.199,357.722 105.149 C 358.025 107.597,358.024 281.277,357.721 283.717 C 355.192 304.104,339.224 319.777,318.660 322.059 C 316.116 322.341,84.526 322.343,81.959 322.061 C 61.303 319.790,45.189 303.760,42.891 283.196 C 42.510 279.781,42.612 107.765,42.997 104.804 C 45.537 85.284,60.457 70.005,79.897 67.015 C 83.428 66.472,316.123 66.378,320.044 66.918 M124.055 117.990 C 119.331 123.003,115.205 127.927,115.304 128.433 C 115.434 129.096,138.322 139.126,140.155 139.323 L 141.237 139.439 141.237 138.817 C 141.237 137.517,140.546 136.313,132.825 124.175 C 129.705 119.271,127.035 115.258,126.891 115.258 C 126.747 115.258,125.470 116.487,124.055 117.990 M267.437 124.794 C 257.565 140.314,257.420 140.908,264.178 138.157 C 266.830 137.077,285.313 128.776,285.516 128.574 C 285.925 128.164,274.494 115.258,273.722 115.258 C 273.601 115.258,270.773 119.549,267.437 124.794 M131.087 145.484 C 130.443 145.681,129.726 146.150,128.978 146.861 C 127.338 148.421,100.281 181.376,99.757 182.453 C 98.425 185.187,99.604 187.757,102.644 188.743 C 105.274 189.597,152.966 200.264,154.227 200.280 C 156.699 200.312,157.806 199.232,157.684 196.907 C 157.596 195.239,137.308 149.152,135.743 147.066 C 134.666 145.631,132.740 144.976,131.087 145.484 M267.470 145.357 C 266.541 145.577,265.290 146.482,264.666 147.388 C 264.170 148.106,244.425 192.280,243.382 195.005 C 242.149 198.224,243.335 200.308,246.380 200.278 C 248.176 200.260,297.585 189.049,298.969 188.345 C 301.941 186.834,302.288 183.861,299.844 180.837 C 295.226 175.122,272.124 147.177,271.654 146.737 C 270.414 145.579,268.795 145.044,267.470 145.357 M199.083 235.527 C 198.782 236.142,198.242 238.063,197.852 239.909 C 196.598 245.842,195.677 247.850,192.990 250.515 C 188.682 254.788,183.902 256.152,177.076 255.056 C 172.205 254.274,171.365 256.258,175.615 258.506 C 180.666 261.178,186.802 260.905,195.696 257.614 C 199.799 256.095,200.012 256.094,204.021 257.574 C 205.722 258.203,207.676 258.874,208.363 259.065 L 209.612 259.414 209.937 260.799 C 210.285 262.281,211.362 264.998,211.863 265.659 C 212.340 266.290,214.868 263.561,215.987 261.208 L 216.344 260.456 218.320 260.208 C 222.923 259.628,226.969 257.473,226.765 255.709 C 226.643 254.660,225.947 254.551,222.623 255.061 C 215.739 256.118,211.028 254.740,206.692 250.403 C 204.152 247.862,203.171 245.604,201.773 239.082 C 200.839 234.725,200.011 233.630,199.083 235.527 ", "stroke", "none", "fill", "#ff0550", "fill-rule", "evenodd"], ["text", "View Tx", 2, "margin-right", "25px", 3, "height", "width", "click"], ["text", "Return", 3, "height", "width", "click"], [4, "ngFor", "ngForOf"], ["text", "Select DJTX", 2, "margin", "5px", 3, "width", "height", "buttonClick"], [3, "tokenInfo", "moduleClick"], [2, "display", "flex", "justify-content", "center", "align-content", "center", "height", "100%"], [2, "width", "95%"], ["id", "svg", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "80", "height", "80", "viewBox", "0, 0, 400,398.96907216494844", "version", "1.1", 2, "filter", "drop-shadow(0px 0px 1px rgb(15, 15, 15))"], ["id", "path0", "d", "M58.969 43.531 C 36.323 45.843,18.644 62.421,14.176 85.537 L 13.711 87.938 13.649 192.990 C 13.584 304.128,13.551 300.121,14.565 305.142 C 18.835 326.283,36.207 342.285,58.041 345.190 C 61.105 345.597,339.720 345.597,342.784 345.190 C 365.917 342.112,383.149 325.039,386.737 301.640 C 387.173 298.795,387.443 98.048,387.020 91.309 C 385.491 66.968,368.774 48.310,344.522 43.873 L 341.959 43.404 201.340 43.378 C 123.162 43.364,59.943 43.432,58.969 43.531 M320.044 66.918 C 339.940 69.658,355.256 85.199,357.722 105.149 C 358.025 107.597,358.024 281.277,357.721 283.717 C 355.192 304.104,339.224 319.777,318.660 322.059 C 316.116 322.341,84.526 322.343,81.959 322.061 C 61.303 319.790,45.189 303.760,42.891 283.196 C 42.510 279.781,42.612 107.765,42.997 104.804 C 45.537 85.284,60.457 70.005,79.897 67.015 C 83.428 66.472,316.123 66.378,320.044 66.918 M124.055 117.990 C 119.331 123.003,115.205 127.927,115.304 128.433 C 115.434 129.096,138.322 139.126,140.155 139.323 L 141.237 139.439 141.237 138.817 C 141.237 137.517,140.546 136.313,132.825 124.175 C 129.705 119.271,127.035 115.258,126.891 115.258 C 126.747 115.258,125.470 116.487,124.055 117.990 M267.437 124.794 C 257.565 140.314,257.420 140.908,264.178 138.157 C 266.830 137.077,285.313 128.776,285.516 128.574 C 285.925 128.164,274.494 115.258,273.722 115.258 C 273.601 115.258,270.773 119.549,267.437 124.794 M131.087 145.484 C 130.443 145.681,129.726 146.150,128.978 146.861 C 127.338 148.421,100.281 181.376,99.757 182.453 C 98.425 185.187,99.604 187.757,102.644 188.743 C 105.274 189.597,152.966 200.264,154.227 200.280 C 156.699 200.312,157.806 199.232,157.684 196.907 C 157.596 195.239,137.308 149.152,135.743 147.066 C 134.666 145.631,132.740 144.976,131.087 145.484 M267.470 145.357 C 266.541 145.577,265.290 146.482,264.666 147.388 C 264.170 148.106,244.425 192.280,243.382 195.005 C 242.149 198.224,243.335 200.308,246.380 200.278 C 248.176 200.260,297.585 189.049,298.969 188.345 C 301.941 186.834,302.288 183.861,299.844 180.837 C 295.226 175.122,272.124 147.177,271.654 146.737 C 270.414 145.579,268.795 145.044,267.470 145.357 M199.083 235.527 C 198.782 236.142,198.242 238.063,197.852 239.909 C 196.598 245.842,195.677 247.850,192.990 250.515 C 188.682 254.788,183.902 256.152,177.076 255.056 C 172.205 254.274,171.365 256.258,175.615 258.506 C 180.666 261.178,186.802 260.905,195.696 257.614 C 199.799 256.095,200.012 256.094,204.021 257.574 C 205.722 258.203,207.676 258.874,208.363 259.065 L 209.612 259.414 209.937 260.799 C 210.285 262.281,211.362 264.998,211.863 265.659 C 212.340 266.290,214.868 263.561,215.987 261.208 L 216.344 260.456 218.320 260.208 C 222.923 259.628,226.969 257.473,226.765 255.709 C 226.643 254.660,225.947 254.551,222.623 255.061 C 215.739 256.118,211.028 254.740,206.692 250.403 C 204.152 247.862,203.171 245.604,201.773 239.082 C 200.839 234.725,200.011 233.630,199.083 235.527 ", "stroke", "none", "fill", "#181818", "fill-rule", "evenodd"], [2, "margin", "4px", "font-weight", "bold", "margin-bottom", "10px", "margin-top", "0px", "font-size", "13px", "color", "rgb(15, 15, 15)"]],
  template: function SendPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "app-input-fancy", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("inputTextEvent", function SendPopupComponent_Template_app_input_fancy_inputTextEvent_3_listener($event) {
        return ctx.updateAmount($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "app-input-fancy", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("inputTextEvent", function SendPopupComponent_Template_app_input_fancy_inputTextEvent_5_listener($event) {
        return ctx.updateRecipent($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "app-default-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("buttonClick", function SendPopupComponent_Template_app_default_button_buttonClick_8_listener() {
        return ctx.toggleChangeAsset(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, SendPopupComponent_span_11_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, SendPopupComponent_span_12_Template, 2, 1, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, SendPopupComponent_h4_14_Template, 2, 0, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, SendPopupComponent_h4_15_Template, 2, 0, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, SendPopupComponent_h4_16_Template, 2, 0, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, SendPopupComponent_h4_17_Template, 2, 0, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, SendPopupComponent_app_fee_box_19_Template, 1, 3, "app-fee-box", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SendPopupComponent_Template_button_click_21_listener() {
        return ctx.sendButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " Continue ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, SendPopupComponent_div_25_Template, 13, 3, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, SendPopupComponent_div_26_Template, 13, 4, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "app-default-button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SendPopupComponent_Template_app_default_button_click_28_listener() {
        return ctx.cancelTxButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "app-default-button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SendPopupComponent_Template_app_default_button_click_29_listener() {
        return ctx.sendButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, SendPopupComponent_div_31_Template, 7, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, SendPopupComponent_div_32_Template, 13, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, SendPopupComponent_div_33_Template, 3, 4, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, SendPopupComponent_div_38_Template, 3, 3, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, SendPopupComponent_div_39_Template, 12, 0, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SendPopupComponent_Template_button_click_41_listener() {
        return ctx.toggleChangeAsset(null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, " Return ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.isSelectingToken == false && ctx.currentTxState != ctx.txStates.VERIFY_TX && ctx.currentTxState != ctx.txStates.TX_SENT ? "show" : "hidden");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("inputWidth", 260)("inputHeight", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("inputWidth", 260)("inputHeight", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("height", 35)("width", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedToken == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedToken != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentTxState == ctx.txStates.INCORRECT_RECIPENT_ADDRESS);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentTxState == ctx.txStates.INSUFFICIENT_FUNDS);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentTxState == ctx.txStates.INSUFFICIENT_FUNDS_FOR_TX_FEE);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentTxState == ctx.txStates.GET_GAS);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentTxState == ctx.txStates.READY_TO_SEND);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.currentTxState == ctx.txStates.READY_TO_SEND ? "send_button" : "send_button_disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.isSelectingToken == false && ctx.currentTxState == ctx.txStates.VERIFY_TX || ctx.currentTxState == ctx.txStates.TX_SENT ? "show" : "hidden");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.currentTxState == ctx.txStates.VERIFY_TX ? "show" : "hidden");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedToken == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedToken != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("height", 35)("width", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("height", 35)("width", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.currentTxState == ctx.txStates.TX_SENT ? "show" : "hidden");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentTxHash == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentTxHash != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentTxHash != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.isSelectingToken == true ? "show" : "hidden");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.tokenArray != null && ctx.tokenArray.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.tokenArray != null && ctx.tokenArray.length == 0);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _input_fancy_input_fancy_component__WEBPACK_IMPORTED_MODULE_2__.InputFancyComponent, _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_3__.DefaultButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _fee_box_fee_box_component__WEBPACK_IMPORTED_MODULE_4__.FeeBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _tx_module_tx_module_component__WEBPACK_IMPORTED_MODULE_5__.TxModuleComponent],
  styles: [".glowyText[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: rgba(71, 159, 250, 0.3) 0px 0px 30px;\n}\n\n.glowyBlue[_ngcontent-%COMP%] {\n  color: #1d21ff;\n  text-shadow: 0px 0px 5px #1d21ff;\n}\n\n.address_box[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: white;\n  background-color: var(--main_background_color);\n  border-radius: 3px;\n  margin: 5px;\n  font-weight: bold;\n  box-shadow: 0px 0px 4px 1px inset black;\n  padding: 5px;\n}\n\n.send_button_disabled[_ngcontent-%COMP%] {\n  background-color: #4343437b;\n  padding: 8px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: white;\n  border: 2px;\n  border-style: solid;\n  border-color: #222222;\n  border-radius: 50px;\n  font-family: Calibre, sans-serif;\n  font-weight: bold;\n  font-size: 13px;\n  color: #222222;\n  overflow: hidden;\n  width: 160px;\n  height: 30px;\n  transition-duration: 120ms;\n}\n\n.send_button[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  padding: 8px;\n  padding-top: 8px;\n  padding-bottom: 4px;\n  color: white;\n  border: 2px;\n  border-style: solid;\n  border-color: var(--main_color_1);\n  border-radius: 50px;\n  font-family: Calibre;\n  font-weight: bold;\n  font-size: 13px;\n  box-shadow: 0px 0px 0px #ff3747;\n  overflow: hidden;\n  width: 160px;\n  height: 30px;\n  transition-duration: 120ms;\n}\n\n[_ngcontent-%COMP%]::selection {\n  background: var(--main_color_1);\n}\n\n.send_button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 12px #ff2877;\n  border-color: var(--main_color_1);\n  background-color: var(--main_color_1);\n  transition-duration: 120ms;\n  cursor: pointer;\n}\n\n.send_button[_ngcontent-%COMP%]:active {\n  box-shadow: 0px 0px 8px #ff2877;\n  background-color: #bd0039;\n  border-color: #bd0039;\n  transition-duration: 120ms;\n  cursor: pointer;\n}\n\n.current_asset_box[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.asset_text[_ngcontent-%COMP%] {\n  align-self: center;\n  height: 35px;\n  width: 115px;\n  background-color: #050505;\n  border-radius: 8px;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  color: var(--main_color_1);\n}\n\n.container_flex[_ngcontent-%COMP%] {\n  margin: 0px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-size: cover;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  text-align: center;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.flex_row[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n\n.shadow_box[_ngcontent-%COMP%] {\n  background-color: var(--darker_background_color);\n  position: relative;\n  display: flex;\n  overflow-wrap: normal;\n  border-radius: 5px;\n  box-shadow: 0px 0px var(--shadow_size) var(--shadow_color);\n  margin-top: 5px;\n  margin-bottom: 5px;\n  width: 90%;\n  height: 100px;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  transition-duration: 130ms;\n  filter: opacity(0%);\n  pointer-events: none;\n  display: none;\n  visibility: hidden;\n  margin-top: 500px;\n}\n\n.show[_ngcontent-%COMP%] {\n  transition-duration: 130ms;\n  filter: opacity(100%);\n}\n\n.item_list[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  border-radius: 8px;\n  border-width: 0px;\n  background-color: var(--darker_background_color);\n  height: 100%;\n  width: 100%;\n  box-shadow: 0px 0px 6px black inset;\n  justify-content: center;\n  overflow: hidden;\n  overflow-y: scroll;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.lds-ripple[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 3px solid var(--main_color_1);\n  filter: drop-shadow(0px 0px 10px var(--main_color_1));\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.26, 0.69, 1.25) infinite;\n}\n\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.5s;\n}\n\n@keyframes lds-ripple {\n  0% {\n    top: 25px;\n    left: 25px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 50px;\n    height: 50px;\n    opacity: 0;\n  }\n}\n\n*[_ngcontent-%COMP%] {\n  scrollbar-width: 0px;\n  scrollbar-color: rgba(34, 34, 34, 0) rgba(34, 34, 34, 0);\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(34, 34, 34, 0);\n  border-radius: 0px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(34, 34, 34, 0);\n  border-radius: 0px;\n  border: 0px solid rgba(34, 34, 34, 0);\n}\n\n.inner_flex_container[_ngcontent-%COMP%] {\n  position: fixed;\n  margin-top: 460px;\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n  padding: 2px;\n  box-sizing: border-box;\n  background-size: cover;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmQtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaURBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFHQTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFHQTtFQUNJLCtCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBR0EsMkJBQUE7RUFDQSx5QkFBQTtFQUlBLGlCQUFBO0FBRko7O0FBS0E7RUFDSSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMERBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtBO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNJLDBCQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBSUEsaUJBQUE7QUFISjs7QUFNQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHFEQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUVBQUE7QUFISjs7QUFNQTtFQUNJLHNCQUFBO0FBSEo7O0FBTUE7RUFDSTtJQUNJLFNBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VBSE47RUFLRTtJQUNJLFFBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBSE47QUFDRjs7QUFNQTtFQUNJLG9CQUFBO0VBQ0Esd0RBQUE7QUFKSjs7QUFPQTtFQUNJLFVBQUE7QUFKSjs7QUFPQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPQTtFQUNJLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FBSkoiLCJmaWxlIjoic2VuZC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nbG93eVRleHQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtc2hhZG93OiByZ2IoNzEgMTU5IDI1MCAvIDMwJSkgMHB4IDBweCAzMHB4O1xufVxuXG4uZ2xvd3lCbHVlIHtcbiAgICBjb2xvcjogcmdiKDI5LCAzMywgMjU1KTtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggcmdiKDI5LCAzMywgMjU1KTtcbn1cblxuLmFkZHJlc3NfYm94IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluX2JhY2tncm91bmRfY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAxcHggaW5zZXQgYmxhY2s7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uc2VuZF9idXR0b25fZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzQzNDM3YjtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZm9udC1mYW1pbHk6IENhbGlicmUsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC8vYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiKDE0LCAxNCwgMTQpO1xuICAgIGNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEyMG1zO1xufVxuXG4uc2VuZF9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBmb250LWZhbWlseTogQ2FsaWJyZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggcmdiKDI1NSwgNTUsIDcxKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTIwbXM7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluX2NvbG9yXzEpO1xufVxuXG4uc2VuZF9idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCByZ2IoMjU1LCA0MCwgMTE5KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjBtcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZW5kX2J1dHRvbjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYigyNTUsIDQwLCAxMTkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODksIDAsIDU3KTtcbiAgICBib3JkZXItY29sb3I6IHJnYigxODksIDAsIDU3KTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjBtcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jdXJyZW50X2Fzc2V0X2JveCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmFzc2V0X3RleHQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTA1MDU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluX2NvbG9yXzEpO1xufVxuXG4uY29udGFpbmVyX2ZsZXgge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vd2lkdGg6IDEwMCU7XG4gICAgLy9oZWlnaHQ6IDEwMCU7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZmxleF9yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5zaGFkb3dfYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXJfYmFja2dyb3VuZF9jb2xvcik7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IHZhcigtLXNoYWRvd19zaXplKSB2YXIoLS1zaGFkb3dfY29sb3IpO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaGlkZGVuIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMzBtcztcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMCUpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG1hcmdpbi10b3A6IDUwMHB4O1xufVxuXG4uc2hvdyB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTMwbXM7XG4gICAgZmlsdGVyOiBvcGFjaXR5KDEwMCUpO1xufVxuXG4uaXRlbV9saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyX2JhY2tncm91bmRfY29sb3IpO1xuICAgIC8vYm94LXNoYWRvdzogMHB4IDBweCB2YXIoLS1zaGFkb3dfc2l6ZSkgIHZhcigtLXNoYWRvd19jb2xvcik7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IGJsYWNrIGluc2V0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmxkcy1yaXBwbGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubGRzLXJpcHBsZSBkaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1tYWluX2NvbG9yXzEpO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxMHB4IHZhcigtLW1haW5fY29sb3JfMSkpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFuaW1hdGlvbjogbGRzLXJpcHBsZSAxcyBjdWJpYy1iZXppZXIoMCwgMC4yNiwgMC42OSwgMS4yNSkgaW5maW5pdGU7XG59XG5cbi5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5cbkBrZXlmcmFtZXMgbGRzLXJpcHBsZSB7XG4gICAgMCUge1xuICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgIGxlZnQ6IDI1cHg7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuKiB7XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiAwcHg7XG4gICAgc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDM0LCAzNCwgMzQsIDApIHJnYmEoMzQsIDM0LCAzNCwgMCk7XG59XG5cbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMHB4O1xufVxuXG4qOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzNCwgMzQsIDM0LCAwKTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAzNCwgMzQsIDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3JkZXI6IDBweCBzb2xpZCByZ2JhKDM0LCAzNCwgMzQsIDApO1xufVxuXG4uaW5uZXJfZmxleF9jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOiA0NjBweDtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59Il19 */"]
});

/***/ }),

/***/ 88624:
/*!***********************************************************!*\
  !*** ./src/app/components/send-tab/send-tab.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendTabComponent": () => (/* binding */ SendTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _unlock_button_default_button2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../unlock-button/default-button2.component */ 16603);



class SendTabComponent {
    constructor() {
        this.displayHoverText = false;
        this.djtxAmount = "0.00";
        this.djtxPrice = "0.00";
        this.currentAddress = "";
        this.tokenArray = null;
        this.currentAddressIndex = 0;
        this.txHistory = null;
        this.sendButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.connectButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.addTokenButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.openAccountSettings = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.openTxHash = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.selectedAssetAmount = '';
        this.isHistoryTabEnabled = false;
        this.isSearchingTokens = false;
    }
    ngOnInit() {
    }
    sendButton() {
        var _a;
        this.sendButtonClick.emit();
        (_a = navigator.serviceWorker.controller) === null || _a === void 0 ? void 0 : _a.postMessage({
            type: 'bababooey',
        });
    }
    connectButton() {
        this.connectButtonClick.emit();
    }
    addNewToken() {
        this.addTokenButtonClick.emit();
    }
    copyAddressToClipboard() {
        navigator.clipboard.writeText(this.currentAddress);
    }
    accountSettingsButton() {
        this.openAccountSettings.emit();
    }
    openTxInExplorer(txHash) {
        this.openTxHash.emit(txHash);
    }
    toggleHover(toggleState) {
        this.displayHoverText = toggleState;
    }
}
SendTabComponent.ɵfac = function SendTabComponent_Factory(t) { return new (t || SendTabComponent)(); };
SendTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SendTabComponent, selectors: [["app-send-tab"]], inputs: { djtxAmount: "djtxAmount", djtxPrice: "djtxPrice", currentAddress: "currentAddress", tokenArray: "tokenArray", isSearchingTokens: "isSearchingTokens", currentAddressIndex: "currentAddressIndex", txHistory: "txHistory" }, outputs: { sendButtonClick: "sendButtonClick", connectButtonClick: "connectButtonClick", addTokenButtonClick: "addTokenButtonClick", openAccountSettings: "openAccountSettings", openTxHash: "openTxHash" }, decls: 75, vars: 7, consts: [[1, "container_flex", 2, "height", "fit-content"], [1, "sc-fotOHu", "boDOmS", 2, "font-family", "Calibre"], ["height", "46", 1, "sc-iJKOTD", "EFDTL"], [1, "custom-1ktim7m", "e1h53kak12"], [1, "sc-hGPBjI", "sc-kszsFN", "bOghYQ", "jrhMFi"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M5.142 0h9.706a5.143 5.143 0 0 1 5.142 5.142v9.716A5.143 5.143 0 0 1 14.848 20H5.142A5.149 5.149 0 0 1 0 14.858V5.142A5.149 5.149 0 0 1 5.142 0Z", "fill", "#262B2E"], ["d", "M5.567 7.112c.023.023.046.034.046.057.022.195.137.32.286.424 1.339.95 2.678 1.888 4.017 2.838.32.229.584.218.904-.011l2.197-1.545c.413-.298.722-.676.87-1.156.023-.058.103-.046.103.011.012.298.012.607-.011.916-.046.595-.343 1.087-.824 1.43-.801.584-1.602 1.156-2.415 1.717-.263.183-.538.137-.801-.034a31.659 31.659 0 0 1-.79-.527c-1.064-.755-2.14-1.522-3.205-2.277-.183-.126-.331-.286-.354-.515V7.307a.163.163 0 0 0-.023-.07v-.125Z", "fill", "#C3C8CC"], ["d", "M5.567 10.076c.023.012.046.023.046.035.022.217.171.343.331.457.619.447 1.225.893 1.843 1.34.687.48 1.385.95 2.072 1.43.4.275.618.275 1.018 0 .698-.492 1.408-.984 2.106-1.476.424-.298.733-.664.904-1.156.035-.092.138-.08.138.023 0 .332-.012.663-.058.984-.068.55-.366 1.007-.824 1.339-.79.584-1.59 1.145-2.392 1.705-.286.195-.572.138-.835-.046-.355-.228-.698-.469-1.042-.71-.984-.697-1.968-1.407-2.952-2.105-.172-.126-.298-.286-.332-.504v-1.144c0-.011-.012-.034-.012-.046-.011-.011-.011-.034-.011-.046v-.08Z", "fill", "#C3C8CC"], ["d", "M7.524 6.963c.023-.023.034-.046.057-.057.424-.298.847-.607 1.282-.881.446-.287.95-.458 1.5-.458.503 0 .972.16 1.384.435.206.137.4.286.572.446.287.263.32.733.092 1.053-.057.069-.103.08-.172.034-.091-.057-.183-.126-.286-.183-.961-.606-1.934-.595-2.895 0-.15.092-.31.195-.458.286a.139.139 0 0 1-.115.012c-.297-.195-.595-.4-.892-.607-.035-.023-.046-.046-.069-.08Z", "fill", "#25DFB3"], ["data-state", "tooltip-hidden", "data-reach-tooltip-trigger", "", 1, "sc-hUpaCq", "eNtojw"], ["opacity", "1", 1, "sc-hKwDye", "dapWVo", 2, "font-size", "16px", "color", "white"], ["opacity", "0.5", 1, "sc-hKwDye", "gxfBnm", 2, "font-size", "16px", "color", "white", "line-height", "20px"], [1, "sc-cBIieI", "elokIo"], ["color", "#EB3742", "opacity", "1", "data-state", "tooltip-hidden", "data-reach-tooltip-trigger", "", 1, "sc-hiwPVj", "kuSYIr"], [1, "sc-fDMmqs", "jQBMC", 2, "opacity", "1", "transform", "none"], [1, "sc-kfPuZi", "htSgmQ", 2, "opacity", "1", "transform", "none"], ["width", "100%", 1, "sc-ljMRFG", "sc-jwQYvw", "eZMniG"], ["width", "100%", 1, "sc-ljMRFG", "sc-gFSQbh", "eZMniG", "dIqorH"], ["size", "38", "opacity", "1", "color", "white", 1, "sc-hKwDye", "dbiFES", "sc-gDGHff", "eLAfAo"], ["width", "100%", 1, "sc-jOxtWs", "sc-iLOkMM", "dDfhYC", "iYxCeC"], ["color", "#777777", "size", "18", "opacity", "1", 1, "sc-hKwDye", "jLtKDT", "sc-fUQcsx", "eeweMt"], ["color", "#777777", "size", "18", "opacity", "1", 1, "sc-hKwDye", "czmLPw", "sc-iJCbQK", "eoshSo"], [1, "sc-gsDKAQ", "demMiZ", "sc-fSDTwv", "gJuVUL"], ["text", "Receive", 3, "height", "width", "buttonClick"], ["text", "Send", 2, "margin-left", "8px", 3, "height", "width", "buttonClick"], ["width", "100%", 1, "sc-ljMRFG", "sc-juEPzu", "eZMniG", "kLnLIW"], [1, "sc-ehIJor", "cWfGEU"], ["color", "clear", "opacity", "1", 1, "sc-hiwPVj", "bXFWDc"], ["src", "../../../assets/logo_dark.png", "alt", "Dijets", "width", "44px", "loading", "lazy", 1, "sc-eGRUor", "hAgQzJ"], [1, "sc-gVkuDy", "dKitVb"], [1, "sc-dwFVFH", "bxJfBc"], ["size", "16", "opacity", "1", "color", "white", 1, "sc-hKwDye", "dNKUQo"], ["size", "14", "opacity", "1", "color", "white", 1, "sc-hKwDye", "huvSvu"], ["size", "14", "color", "#777777", "opacity", "1", 1, "sc-hKwDye", "ibbQCR"], ["width", "100%", 1, "sc-jOxtWs", "sc-hKumaY", "dDfhYC", "imecqU"], [1, "sc-hGPBjI", "bOghYQ"], ["width", "20", "height", "17", "viewBox", "0 0 20 17", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0.5 4.4842V3.5158C0.508829 3.50915 0.527195 3.5 0.555556 3.5H19.4444C19.4728 3.5 19.4912 3.50915 19.5 3.5158V4.4842C19.4912 4.49085 19.4728 4.5 19.4444 4.5H0.555556C0.527196 4.5 0.508829 4.49085 0.5 4.4842Z", "fill", "", "stroke", "#777777"], ["cx", "13", "cy", "4", "r", "3.25", "fill", "#222222", "stroke", "#777777", "stroke-width", "1.5"], ["d", "M0.5 13.4842V12.5158C0.508829 12.5092 0.527195 12.5 0.555556 12.5H19.4444C19.4728 12.5 19.4912 12.5092 19.5 12.5158V13.4842C19.4912 13.4908 19.4728 13.5 19.4444 13.5H0.555556C0.527196 13.5 0.508829 13.4908 0.5 13.4842Z", "fill", "", "stroke", "#777777"], ["cx", "7", "cy", "13", "r", "3.25", "fill", "#222222", "stroke", "#777777", "stroke-width", "1.5"], ["size", "16", "color", "#777777", "opacity", "1", 1, "sc-hKwDye", "tNUmy"], [1, "sc-iMrobD", "jQvFSI"], [1, "sc-cOLXoO", "gABeBn", 2, "opacity", "0", "width", "43.6111px", "transform", "translateX(22px) translateZ(0px)"], ["role", "tablist", "aria-orientation", "horizontal", 1, "sc-gwNDlS", "sc-lVTEl", "kKvsQV", "gaprho"], ["href", "/", 1, "sc-cdJjGe", "bJhhPG"], ["width", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M12 0C5.38972 0 0 5.38972 0 12C1.33333e-07 18.6103 5.38972 24 12 24C18.6103 24 24 18.6103 24 12C24 5.38972 18.6103 0 12 0ZM11.2365 4.74948H13.0875V6.41563C14.2291 6.50819 15.3554 6.81643 16.2193 7.32552L15.2781 9.59323C14.2445 9.03786 13.2265 8.76042 12.2854 8.76042C11.005 8.76042 10.5422 9.19235 10.5422 9.73229C10.5422 11.383 16.6667 10.149 16.6667 14.1292C16.6667 15.7644 15.4941 17.1837 13.0875 17.5385V19.2505H11.2365V17.6C9.69376 17.492 8.2281 17.0447 7.33333 16.4276L8.33594 14.175C9.29241 14.8075 10.6499 15.2396 11.8995 15.2396C13.1645 15.2396 13.6583 14.8849 13.6583 14.3604C13.6583 12.648 7.51823 13.8975 7.51823 9.88646C7.51823 8.18949 8.73729 6.75489 11.2365 6.44635V4.74948Z"], ["href", "/collectibles", 1, "sc-cdJjGe", "iVhhvR"], ["width", "22", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.43849 0H1.21136C0.555205 0 0 0.529969 0 1.21136V9.46372C0 10.1199 0.529969 10.6751 1.21136 10.6751H9.46372C10.1199 10.6751 10.6751 10.1451 10.6751 9.46372V1.21136C10.6498 0.529969 10.0946 0 9.43849 0Z"], ["d", "M22.7634 0H14.5363C13.8802 0 13.325 0.529969 13.325 1.21136V9.46372C13.325 10.1199 13.8549 10.6751 14.5363 10.6751H22.7887C23.4448 10.6751 24 10.1451 24 9.46372V1.21136C23.9748 0.529969 23.4448 0 22.7634 0Z"], ["d", "M9.43849 13.3249H1.21136C0.555205 13.3249 0 13.8549 0 14.5363V22.7887C0 23.4448 0.529969 24 1.21136 24H9.46372C10.1199 24 10.6751 23.47 10.6751 22.7887V14.5363C10.6498 13.8801 10.0946 13.3249 9.43849 13.3249Z"], ["d", "M22.7634 13.3249H14.5363C13.8802 13.3249 13.325 13.8549 13.325 14.5363V22.7887C13.325 23.4448 13.8549 24 14.5363 24H22.7887C23.4448 24 24 23.47 24 22.7887V14.5363C23.9748 13.8801 23.4448 13.3249 22.7634 13.3249Z"], ["href", "/swap", 1, "sc-cdJjGe", "iVhhvR"], ["width", "24", "height", "24", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M24.0263 31.7308L31.1713 24.5944C31.4556 24.3101 31.6153 23.9248 31.6153 23.523C31.6153 23.1212 31.4556 22.7358 31.1713 22.4515L24.0263 15.3152L21.8808 17.4581L26.435 22.0068H5.73401V25.0392H26.435L21.8808 29.5878L24.0263 31.7308Z"], ["d", "M7.97348 0.5L0.828483 7.63634C0.5442 7.92063 0.384521 8.306 0.384521 8.7078C0.384521 9.1096 0.5442 9.49497 0.828483 9.77927L7.97348 16.9156L10.119 14.7727L5.56483 10.224H26.2658V7.19158H5.56483L10.119 2.64292L7.97348 0.5Z"], ["href", "/notifications", 1, "sc-cdJjGe", "iVhhvR"], ["width", "17", "viewBox", "0 0 17 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16.2939 10.7632C16.2244 10.5991 16.0671 10.4943 15.8915 10.4943H10.4122L12.9691 0.568001C13.0228 0.364958 12.9376 0.152502 12.7594 0.0543417C12.5812 -0.0438182 12.3544 -0.00616764 12.2181 0.144434L1.08525 12.7493C0.967305 12.8797 0.938473 13.0747 1.00793 13.2279C1.07346 13.3947 1.23072 13.5009 1.40895 13.5009H6.88825L4.32617 23.4299C4.27113 23.6316 4.35894 23.8454 4.54241 23.9489C4.60663 23.9825 4.67608 24 4.74685 24C4.87135 24 4.99192 23.9476 5.07579 23.8534L16.2205 11.2473C16.3345 11.1141 16.362 10.9246 16.2939 10.7632Z"], [1, "sc-cdJjGe", "iVhhvR", 3, "click"], ["width", "22", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M18.9771 7.85962H18.304C18.0668 7.85962 17.8584 7.70871 17.7866 7.48113C17.6524 7.06911 17.4847 6.66427 17.2883 6.2762C17.1805 6.063 17.2188 5.80908 17.3865 5.64139L17.8632 5.16469C18.2633 4.76464 18.2633 4.11546 17.8632 3.71781L16.2822 2.13678C15.8821 1.73673 15.233 1.73673 14.8353 2.13678L14.3586 2.61349C14.1909 2.78117 13.9346 2.8195 13.7238 2.7117C13.3381 2.51288 12.9333 2.34519 12.5189 2.21344C12.2937 2.14157 12.1404 1.93317 12.1404 1.69601V1.02288C12.1404 0.45754 11.6804 0 11.1175 0H8.8825C8.31716 0 7.85962 0.459935 7.85962 1.02288V1.69601C7.85962 1.93317 7.70871 2.14157 7.48113 2.21344C7.06911 2.34759 6.66427 2.51527 6.2762 2.7117C6.063 2.8195 5.80908 2.78117 5.64139 2.61349L5.16469 2.13678C4.76464 1.73673 4.11546 1.73673 3.71781 2.13678L2.13678 3.71781C1.73673 4.11786 1.73673 4.76704 2.13678 5.16469L2.61349 5.64139C2.78117 5.80908 2.8195 6.0654 2.7117 6.2762C2.51288 6.66188 2.34519 7.06671 2.21344 7.48113C2.13918 7.70631 1.93317 7.85962 1.69601 7.85962H1.02288C0.45754 7.85962 0 8.31956 0 8.8825V11.1175C0 11.6828 0.459935 12.1404 1.02288 12.1404H1.69601C1.93317 12.1404 2.14157 12.2913 2.21344 12.5189C2.34759 12.9309 2.51527 13.3357 2.7117 13.7238C2.82189 13.937 2.78117 14.1909 2.61349 14.3586L2.13678 14.8353C1.73673 15.2354 1.73673 15.8845 2.13678 16.2822L3.71781 17.8632C4.11786 18.2633 4.76704 18.2633 5.16469 17.8632L5.64139 17.3865C5.80908 17.2188 6.0654 17.1805 6.2762 17.2883C6.66188 17.4871 7.06671 17.6548 7.48113 17.7866C7.70631 17.8584 7.85962 18.0668 7.85962 18.304V18.9771C7.85962 19.5425 8.31956 20 8.8825 20H11.1175C11.6828 20 12.1404 19.5401 12.1404 18.9771V18.304C12.1404 18.0668 12.2913 17.8584 12.5189 17.7866C12.9309 17.6524 13.3357 17.4847 13.7238 17.2883C13.937 17.1805 14.1909 17.2188 14.3586 17.3865L14.8353 17.8632C15.2354 18.2633 15.8845 18.2633 16.2822 17.8632L17.8632 16.2822C18.2633 15.8821 18.2633 15.233 17.8632 14.8353L17.3865 14.3586C17.2188 14.1909 17.1805 13.9346 17.2883 13.7238C17.4871 13.3381 17.6548 12.9333 17.7866 12.5189C17.8608 12.2937 18.0668 12.1404 18.304 12.1404H18.9771C19.5425 12.1404 20 11.6804 20 11.1175V8.8825C20 8.31956 19.5401 7.85962 18.9771 7.85962ZM9.9988 13.9897C7.79974 13.9897 6.0103 12.2003 6.0103 10.0012C6.0103 7.80213 7.79974 6.0127 9.9988 6.0127C12.1979 6.0127 13.9873 7.80213 13.9873 10.0012C13.9873 12.2003 12.1979 13.9897 9.9988 13.9897Z"]], template: function SendTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Utility Chain");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "+$0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "0%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "app-default-button2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("buttonClick", function SendTabComponent_Template_app_default_button2_buttonClick_29_listener() { return ctx.sendButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "app-default-button2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("buttonClick", function SendTabComponent_Template_app_default_button2_buttonClick_30_listener() { return ctx.sendButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Dijets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "circle", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "circle", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Manage tikki list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "svg", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "svg", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "svg", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "svg", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SendTabComponent_Template_div_click_72_listener() { return ctx.accountSettingsButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", ctx.currentAddressIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.djtxAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 40)("width", 161.07);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 40)("width", 161.07);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.djtxAmount, " DJTX");
    } }, directives: [_unlock_button_default_button2_component__WEBPACK_IMPORTED_MODULE_0__.DefaultButton2Component], styles: [".address[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #c7c7c7;\n  background-color: var(--main_background_color);\n  border-radius: 3px;\n  margin-top: 0px;\n  margin-left: 8px;\n  margin-right: 8px;\n  font-family: IBM Plex Mono, monospace;\n  box-shadow: 0px 0px 4px inset black;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  transition-duration: 200ms;\n  cursor: pointer;\n}\n\n.address[_ngcontent-%COMP%]:active {\n  transition-duration: 200ms;\n  text-shadow: 0px 0px 6px #ff0055;\n  color: #ff0055;\n}\n\n.chain_denominator[_ngcontent-%COMP%] {\n  color: #c7c7c7;\n  font-size: 12px;\n  margin-bottom: 0px;\n  margin-left: 8px;\n  margin-right: 8px;\n  padding-bottom: 0px;\n  align-self: flex-start;\n  text-align: center;\n}\n\n.background[_ngcontent-%COMP%] {\n  background-color: var(--main_background_color);\n  border-radius: 3px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.container_flex[_ngcontent-%COMP%] {\n  margin: 0px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-size: cover;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n}\n\n.flex_row[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n\n.shadow_box[_ngcontent-%COMP%] {\n  background-color: var(--darker_background_color);\n  position: relative;\n  display: flex;\n  overflow-wrap: normal;\n  border-radius: 8px;\n  box-shadow: 0px 0px var(--shadow_size) 1px var(--shadow_color) inset;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  box-sizing: border-box;\n  width: 92%;\n  height: 126px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 1px;\n  background-color: var(--main_background_color);\n  align-self: center;\n  margin: 3px;\n}\n\n.text_button[_ngcontent-%COMP%] {\n  color: white;\n  transition-duration: 220ms;\n  cursor: pointer;\n}\n\n.text_button[_ngcontent-%COMP%]:hover {\n  transition-duration: 220ms;\n  color: var(--main_color_1);\n  text-shadow: 0px 0px 4px var(--main_color_1);\n}\n\n.text_button[_ngcontent-%COMP%]:active {\n  transition-duration: 220ms;\n  color: #b90038;\n  text-shadow: 0px 0px 4px #b90038;\n}\n\n.inner_flex_container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n  padding: 2px;\n  background-size: cover;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  box-sizing: border-box;\n  align-items: flex-start;\n}\n\n.item_list[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  border-radius: 0px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-width: 0px;\n  background-color: var(--darker_background_color);\n  background-color: rgba(255, 255, 255, 0);\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  overflow: hidden;\n  overflow-y: scroll;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.svg_button[_ngcontent-%COMP%] {\n  fill: #dddddd;\n  color: #dddddd;\n  transition-duration: 220px;\n}\n\n.svg_button[_ngcontent-%COMP%]:hover {\n  transition-duration: 220px;\n  fill: var(--main_color_1);\n  color: var(--main_color_1);\n  filter: drop-shadow(0px 0px 5px var(--main_color_1));\n  cursor: pointer;\n}\n\n.svg_button[_ngcontent-%COMP%]:active {\n  transition-duration: 220px;\n  fill: #b4003c;\n  color: #b4003c;\n  filter: drop-shadow(0px 0px 5px #b4003c);\n  cursor: pointer;\n}\n\n.svg_button_selected[_ngcontent-%COMP%] {\n  transition-duration: 220px;\n  fill: var(--main_color_1);\n  color: var(--main_color_1);\n  filter: drop-shadow(0px 0px 5px var(--main_color_1));\n}\n\n.lds-ripple[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 3px solid var(--main_color_1);\n  filter: drop-shadow(0px 0px 10px var(--main_color_1));\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.26, 0.69, 1.25) infinite;\n}\n\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.5s;\n}\n\n@keyframes lds-ripple {\n  0% {\n    top: 25px;\n    left: 25px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 50px;\n    height: 50px;\n    opacity: 0;\n  }\n}\n\n*[_ngcontent-%COMP%] {\n  scrollbar-width: 0px;\n  scrollbar-color: rgba(34, 34, 34, 0) rgba(34, 34, 34, 0);\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(34, 34, 34, 0);\n  border-radius: 0px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(34, 34, 34, 0);\n  border-radius: 0px;\n  border: 0px solid rgba(34, 34, 34, 0);\n}\n\n[_ngcontent-%COMP%]::selection {\n  background: var(--main_color_1);\n}\n\n.boDOmS[_ngcontent-%COMP%] {\n  background-color: #0b0b0f;\n  min-width: 360px;\n  min-height: 540px;\n  height: 100vh;\n  width: 100vw;\n  border: 1px solid #323232;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden;\n}\n\n.EFDTL[_ngcontent-%COMP%] {\n  background-color: #131419;\n  padding: 10px 18px;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  height: 25px;\n  width: 324px;\n}\n\n.jrhMFi[_ngcontent-%COMP%] {\n  padding-right: 15px;\n}\n\n.bOghYQ[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  padding: 5px;\n  margin: -5px;\n}\n\n.bOghYQ[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #777777;\n  transition: fill 200ms ease 0s;\n}\n\n.eNtojw[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  min-width: 0px;\n  cursor: pointer;\n}\n\n.eNtojw[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  margin-right: 6px;\n}\n\n.gxfBnm[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  font-style: normal;\n  font-weight: 400;\n  opacity: 0.5;\n  font-size: 16px;\n  line-height: 25px;\n  text-decoration: none;\n  background-color: transparent;\n}\n\n.elokIo[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 12px;\n}\n\n.kuSYIr[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n  background-color: #eb3742;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  opacity: 1;\n}\n\n.jQBMC[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  overflow: auto;\n  padding: 0px;\n}\n\n.htSgmQ[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n\n.eZMniG[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.dIqorH[_ngcontent-%COMP%] {\n  position: relative;\n  width: 358px;\n  margin-top: -16px;\n  background: linear-gradient(rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%);\n}\n\n.eZMniG[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.dbiFES[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  font-style: normal;\n  font-weight: 600;\n  opacity: 1;\n  font-size: 38px;\n  line-height: 25px;\n  text-decoration: none;\n  background-color: transparent;\n}\n\n.eLAfAo[_ngcontent-%COMP%] {\n  margin-top: 48px;\n  margin-bottom: 18px;\n}\n\n.iYxCeC[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  min-height: 25px;\n}\n\n.dDfhYC[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.eeweMt[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n\n.jLtKDT[_ngcontent-%COMP%] {\n  color: #777777;\n  text-align: center;\n  font-style: normal;\n  font-weight: 500;\n  opacity: 1;\n  font-size: 18px;\n  line-height: 25px;\n  text-decoration: none;\n  background-color: transparent;\n}\n\n.eoshSo[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  padding: 2px 5px;\n}\n\n.czmLPw[_ngcontent-%COMP%] {\n  color: #777777;\n  text-align: center;\n  font-style: normal;\n  font-weight: 500;\n  opacity: 1;\n  font-size: 18px;\n  line-height: 25px;\n  text-decoration: none;\n  background-color: rgba(119, 119, 119, 0.1);\n}\n\n.gJuVUL[_ngcontent-%COMP%] {\n  width: 296px;\n  margin-bottom: 22px;\n}\n\n.demMiZ[_ngcontent-%COMP%] {\n  display: flex;\n  width: 330px;\n}\n\n.gJuVUL[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  box-shadow: black 0px 2px 6px;\n}\n\n.fLrQud[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 10px 0px;\n  width: 100%;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  color: white;\n  pointer-events: auto;\n  border: none;\n  outline-color: transparent;\n  outline-style: none;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background: #333333;\n}\n\n.gJuVUL[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 6px;\n}\n\n.iLhUlE[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.kLnLIW[_ngcontent-%COMP%] {\n  margin: 13px 0px 15px;\n  width: 100%;\n}\n\n.eZMniG[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.custom-1ktim7m[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  top: 45px;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: radial-gradient(50% 6697800% at 50% 50%, #202023 0%, rgba(23, 24, 28, 0) 100%);\n}\n\n.cWfGEU[_ngcontent-%COMP%] {\n  background: #131419;\n  border-radius: 6px;\n  display: flex;\n  margin-bottom: 10px;\n  align-items: center;\n  height: 100px;\n  width: 310px;\n  cursor: pointer;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.bXFWDc[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  opacity: 1;\n}\n\n.hAgQzJ[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 44px;\n  width: 44px;\n  padding-left: 8px;\n}\n\n.dKitVb[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 10px;\n  margin-top: -15px;\n}\n\n.bxJfBc[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.dKitVb[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-top: -15px;\n}\n\n.dNKUQo[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  font-style: normal;\n  font-weight: 600;\n  opacity: 1;\n  font-size: 16px;\n  line-height: 19px;\n  text-decoration: none;\n  background-color: transparent;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 240px;\n}\n\n.huvSvu[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  font-style: normal;\n  font-weight: 500;\n  opacity: 1;\n  font-size: 14px;\n  line-height: 17px;\n  text-decoration: none;\n  background-color: transparent;\n}\n\n.dKitVb[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.bxJfBc[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.ibbQCR[_ngcontent-%COMP%] {\n  color: #777777;\n  text-align: center;\n  font-style: normal;\n  font-weight: normal;\n  opacity: 1;\n  font-size: 14px;\n  line-height: 17px;\n  text-decoration: none;\n  background-color: transparent;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.imecqU[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 36px auto;\n  width: auto;\n  height: 48px;\n}\n\n.dDfhYC[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.bOghYQ[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  padding: 5px;\n  margin: -5px;\n}\n\n.bOghYQ[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #777777;\n  transition: fill 200ms ease 0s;\n}\n\n.imecqU[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.tNUmy[_ngcontent-%COMP%] {\n  color: #777777;\n  text-align: center;\n  font-style: normal;\n  font-weight: 500;\n  opacity: 1;\n  font-size: 16px;\n  margin: 0px 0px 0px 10px;\n  line-height: 19px;\n  text-decoration: none;\n  background-color: transparent;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.jQvFSI[_ngcontent-%COMP%] {\n  position: relative;\n  height: 60px;\n  display: flex;\n}\n\n.gABeBn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 0px;\n  height: 2px;\n  background-color: #8a81f8;\n}\n\n.gaprho[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  display: flex;\n  justify-content: space-around;\n  padding: 0px 10px;\n}\n\n.kKvsQV[_ngcontent-%COMP%] {\n  background-color: #131419;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px -6px 10px;\n}\n\n.bJhhPG[_ngcontent-%COMP%] {\n  padding: 15px 0px;\n  margin: 0px 12px;\n  position: relative;\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bJhhPG[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: fill 200ms ease 0s;\n  fill: white;\n}\n\n.bJhhPG[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: -1px;\n  left: 0px;\n  height: 2px;\n  width: 100%;\n  background-color: #8a81f8;\n}\n\n.iVhhvR[_ngcontent-%COMP%] {\n  padding: 15px 0px;\n  margin: 0px 12px;\n  position: relative;\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.iVhhvR[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #666666;\n  transition: fill 200ms ease 0s;\n}\n\n.iVhhvR[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: -1px;\n  left: 0px;\n  height: 2px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmQtdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFJQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9FQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRDQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksT0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdEQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUlBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFJQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQUZKOztBQUtBO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0RBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvREFBQTtBQUZKOztBQUtBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EscURBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtRUFBQTtBQUZKOztBQUtBO0VBQ0ksc0JBQUE7QUFGSjs7QUFLQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUFGTjtFQUlFO0lBQ0ksUUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUFGTjtBQUNGOztBQUtBO0VBQ0ksb0JBQUE7RUFDQSx3REFBQTtBQUhKOztBQU1BO0VBQ0ksVUFBQTtBQUhKOztBQU1BO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1BO0VBQ0kscUNBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FBSEo7O0FBTUE7RUFDSSwrQkFBQTtBQUhKOztBQU1BO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxpQkFBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUVBLDJCQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNGQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFFQSwyQkFBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBSEo7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFFQSx1QkFBQTtBQUhKOztBQU1BO0VBQ0ksaUJBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0FBSEo7O0FBTUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSw2QkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksMkNBQUE7QUFISjs7QUFNQTtFQUNJLGlCQUFBO0FBSEo7O0FBTUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUVBLDJCQUFBO0FBSEo7O0FBTUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsMEZBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFFQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBRUEsOEJBQUE7QUFISjs7QUFNQTtFQUNJLGlCQUFBO0FBSEo7O0FBTUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBRUEsOEJBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUVBLHVCQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBSEo7O0FBTUE7RUFDSSxnQkFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSEo7O0FBTUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNQTtFQUNJLHlCQUFBO0VBQ0EsNkNBQUE7QUFISjs7QUFNQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUVBLHVCQUFBO0FBSEo7O0FBTUE7RUFDSSw4QkFBQTtFQUNBLFdBQUE7QUFISjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUhKOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBRUEsdUJBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUhKIiwiZmlsZSI6InNlbmQtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZHJlc3Mge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogcmdiKDE5OSwgMTk5LCAxOTkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5fYmFja2dyb3VuZF9jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBNb25vLCBtb25vc3BhY2U7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggaW5zZXQgYmxhY2s7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGRyZXNzOmFjdGl2ZSB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYigyNTUsIDAsIDg1KTtcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgODUpO1xufVxuXG4uY2hhaW5fZGVub21pbmF0b3Ige1xuICAgIGNvbG9yOiByZ2IoMTk5LCAxOTksIDE5OSk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluX2JhY2tncm91bmRfY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4uY29udGFpbmVyX2ZsZXgge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmZsZXhfcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uc2hhZG93X2JveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyX2JhY2tncm91bmRfY29sb3IpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCB2YXIoLS1zaGFkb3dfc2l6ZSkgMXB4IHZhcigtLXNoYWRvd19jb2xvcikgaW5zZXQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiA5MiU7XG4gICAgaGVpZ2h0OiAxMjZweDtcbn1cblxuLmRpdmlkZXIge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluX2JhY2tncm91bmRfY29sb3IpO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDNweDtcbn1cblxuLnRleHRfYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjIwbXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGV4dF9idXR0b246aG92ZXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIyMG1zO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluX2NvbG9yXzEpO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCB2YXIoLS1tYWluX2NvbG9yXzEpO1xufVxuXG4udGV4dF9idXR0b246YWN0aXZlIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMjBtcztcbiAgICBjb2xvcjogcmdiKDE4NSwgMCwgNTYpO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCByZ2IoMTg1LCAwLCA1Nik7XG59XG5cbi5pbm5lcl9mbGV4X2NvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uaXRlbV9saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyX2JhY2tncm91bmRfY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vYm94LXNoYWRvdzogMHB4IDBweCB2YXIoLS1zaGFkb3dfc2l6ZSkgMXB4IHZhcigtLXNoYWRvd19jb2xvcikgaW5zZXQ7XG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnN2Z19idXR0b24ge1xuICAgIGZpbGw6IHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIyMHB4O1xufVxuXG4uc3ZnX2J1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjIwcHg7XG4gICAgZmlsbDogdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggNXB4IHZhcigtLW1haW5fY29sb3JfMSkpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN2Z19idXR0b246YWN0aXZlIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMjBweDtcbiAgICBmaWxsOiByZ2IoMTgwLCAwLCA2MCk7XG4gICAgY29sb3I6IHJnYigxODAsIDAsIDYwKTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggNXB4IHJnYigxODAsIDAsIDYwKSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3ZnX2J1dHRvbl9zZWxlY3RlZCB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjIwcHg7XG4gICAgZmlsbDogdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggNXB4IHZhcigtLW1haW5fY29sb3JfMSkpO1xufVxuXG4ubGRzLXJpcHBsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5sZHMtcmlwcGxlIGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggdmFyKC0tbWFpbl9jb2xvcl8xKSk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBsZHMtcmlwcGxlIDFzIGN1YmljLWJlemllcigwLCAwLjI2LCAwLjY5LCAxLjI1KSBpbmZpbml0ZTtcbn1cblxuLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbn1cblxuQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcbiAgICAwJSB7XG4gICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgbGVmdDogMjVweDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG4qIHtcbiAgICBzY3JvbGxiYXItd2lkdGg6IDBweDtcbiAgICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMCkgcmdiYSgzNCwgMzQsIDM0LCAwKTtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwcHg7XG59XG5cbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMCk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJvcmRlcjogMHB4IHNvbGlkIHJnYmEoMzQsIDM0LCAzNCwgMCk7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluX2NvbG9yXzEpO1xufVxuXG4uYm9ET21TIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDExLCAxNSk7XG4gICAgbWluLXdpZHRoOiAzNjBweDtcbiAgICBtaW4taGVpZ2h0OiA1NDBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNTAsIDUwLCA1MCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uRUZEVEwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzE0MTk7XG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAzMjRweDtcbn1cblxuLmpyaE1GaSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLmJPZ2hZUSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAtNXB4O1xufVxuXG4uYk9naFlRIHN2ZyB7XG4gICAgZmlsbDogcmdiKDExOSwgMTE5LCAxMTkpO1xuICAgIHRyYW5zaXRpb246IGZpbGwgMjAwbXMgZWFzZSAwcztcbn1cblxuLmVOdG9qdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1pbi13aWR0aDogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVOdG9qdyBwOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLmd4ZkJubSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmVsb2tJbyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMnB4O1xufVxuXG4ua3VTWUlyIHtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgNTUsIDY2KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5qUUJNQyB7XG4gICAgZmxleDogMSAxIDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmh0U2dtUSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmVaTW5pRyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5kSXFvckgge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMzU4cHg7XG4gICAgbWFyZ2luLXRvcDogLTE2cHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTM2LCAxMzYsIDEzNiwgMC4wNSkgMCUsIHJnYmEoMTM2LCAxMzYsIDEzNiwgMCkgMTAwJSk7XG59XG5cbi5lWk1uaUcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uZGJpRkVTIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmVMQWZBbyB7XG4gICAgbWFyZ2luLXRvcDogNDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uaVl4Q2VDIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgbWluLWhlaWdodDogMjVweDtcbn1cblxuLmREZmhZQyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lZXdlTXQge1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4uakx0S0RUIHtcbiAgICBjb2xvcjogcmdiKDExOSwgMTE5LCAxMTkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5lb3NoU28ge1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiAycHggNXB4O1xufVxuXG4uY3ptTFB3IHtcbiAgICBjb2xvcjogcmdiKDExOSwgMTE5LCAxMTkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTksIDExOSwgMTE5LCAwLjEpO1xufVxuXG4uZ0p1VlVMIHtcbiAgICB3aWR0aDogMjk2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cblxuLmRlbU1pWiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzMwcHg7XG59XG5cbi5nSnVWVUw+KiB7XG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwKSAwcHggMnB4IDZweDtcbn1cblxuLmZMclF1ZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgYmFja2dyb3VuZDogcmdiKDUxLCA1MSwgNTEpO1xufVxuXG4uZ0p1VlVMPioge1xuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDJweCA2cHg7XG59XG5cbi5pTGhVbEUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ua0xuTElXIHtcbiAgICBtYXJnaW46IDEzcHggMHB4IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5lWk1uaUcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uY3VzdG9tLTFrdGltN20ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ1cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoNTAlIDY2OTc4MDAlIGF0IDUwJSA1MCUsICMyMDIwMjMgMCUsIHJnYmEoMjMsIDI0LCAyOCwgMCkgMTAwJSk7XG59XG5cbi5jV2ZHRVUge1xuICAgIGJhY2tncm91bmQ6ICMxMzE0MTk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMzEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uYlhGV0RjIHtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uaEFnUXpKIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4uZEtpdFZiIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cblxuLmJ4SmZCYyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRLaXRWYj4qIHtcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cblxuLmROS1VRbyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1heC13aWR0aDogMjQwcHg7XG59XG5cbi5odXZTdnUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZEtpdFZiPioge1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLmJ4SmZCYyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmliYlFDUiB7XG4gICAgY29sb3I6IHJnYigxMTksIDExOSwgMTE5KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmltZWNxVSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMzZweCBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogNDhweDtcbn1cblxuLmREZmhZQyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5iT2doWVEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogLTVweDtcbn1cblxuLmJPZ2hZUSBzdmcge1xuICAgIGZpbGw6IHJnYigxMTksIDExOSwgMTE5KTtcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDIwMG1zIGVhc2UgMHM7XG59XG5cbi5pbWVjcVUgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnROVW15IHtcbiAgICBjb2xvcjogcmdiKDExOSwgMTE5LCAxMTkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmpRdkZTSSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZ0FCZUJuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOCwgMTI5LCAyNDgpO1xufVxuXG4uZ2FwcmhvIHtcbiAgICBmbGV4OiAxIDEgMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuLmtLdnNRViB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTQxOTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAtNnB4IDEwcHg7XG59XG5cbi5iSmhoUEcge1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIG1hcmdpbjogMHB4IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5iSmhoUEcgc3ZnIHtcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDIwMG1zIGVhc2UgMHM7XG4gICAgZmlsbDogd2hpdGU7XG59XG5cbi5iSmhoUEc6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzgsIDEyOSwgMjQ4KTtcbn1cblxuLmlWaGh2UiB7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgbWFyZ2luOiAwcHggMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmlWaGh2UiBzdmcge1xuICAgIGZpbGw6IHJnYigxMDIsIDEwMiwgMTAyKTtcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDIwMG1zIGVhc2UgMHM7XG59XG5cbi5pVmhodlI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 18440:
/*!*******************************************************************!*\
  !*** ./src/app/components/settings-tab/settings-tab.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsTabComponent": () => (/* binding */ SettingsTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../default-button/default-button.component */ 43775);
/* harmony import */ var _chain_id_selection_chain_id_selection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chain-id-selection/chain-id-selection.component */ 4477);





function SettingsTabComponent_app_chain_id_selection_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-chain-id-selection", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("changeChainID", function SettingsTabComponent_app_chain_id_selection_7_Template_app_chain_id_selection_changeChainID_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.updateChainID($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentChainID", ctx_r0.walletState.nodeDetails.CHAIN_ID);
} }
class SettingsTabComponent {
    constructor() {
        this.walletState = null;
        this.setChainID = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.clearTransactionHistory = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.deleteWallet = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    updateChainID(chainID) {
        this.setChainID.emit(chainID);
    }
    clearTxHistory() {
        this.clearTransactionHistory.emit();
    }
    deleteWalletButton() {
        this.deleteWallet.emit();
    }
}
SettingsTabComponent.ɵfac = function SettingsTabComponent_Factory(t) { return new (t || SettingsTabComponent)(); };
SettingsTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SettingsTabComponent, selectors: [["app-settings-tab"]], inputs: { walletState: "walletState" }, outputs: { setChainID: "setChainID", clearTransactionHistory: "clearTransactionHistory", deleteWallet: "deleteWallet" }, decls: 15, vars: 5, consts: [[1, "container_flex", 2, "flex-direction", "column"], [1, "inner_container_flex", 2, "flex-direction", "column", "justify-content", "space-evenly"], [1, "shadow_box"], [2, "color", "var(--main_color_1)", "font-weight", "normal", "margin-bottom", "12px", "margin-top", "20px"], [2, "text-align", "center", "color", "var(--main_color_1)", "width", "100%", "margin", "18px"], [3, "currentChainID", "changeChainID", 4, "ngIf"], [2, "margin", "10px"], ["text", "Clear Tx History", 3, "height", "width", "buttonClick"], ["text", "! Reset Wallet !", 3, "height", "width", "buttonClick"], [3, "currentChainID", "changeChainID"]], template: function SettingsTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Network Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " ~ Select Network ~ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SettingsTabComponent_app_chain_id_selection_7_Template, 1, 1, "app-chain-id-selection", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Clear Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "app-default-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("buttonClick", function SettingsTabComponent_Template_app_default_button_buttonClick_12_listener() { return ctx.clearTxHistory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "app-default-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("buttonClick", function SettingsTabComponent_Template_app_default_button_buttonClick_14_listener() { return ctx.deleteWalletButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.walletState != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 35)("width", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 35)("width", 170);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__.DefaultButtonComponent, _chain_id_selection_chain_id_selection_component__WEBPACK_IMPORTED_MODULE_1__.ChainIDSelectionComponent], styles: [".container_flex[_ngcontent-%COMP%] {\n  margin: 0px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-size: cover;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  text-align: center;\n  width: 100%;\n  height: 469px;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n\n.inner_container_flex[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n\n.shadow_box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  overflow-wrap: normal;\n  border-radius: 12px;\n  box-shadow: 0px 0px var(--shadow_size) 1px var(--shadow_color) inset;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  box-sizing: border-box;\n  width: 92%;\n  height: auto;\n  padding: 10px;\n}\n\n*[_ngcontent-%COMP%] {\n  scrollbar-width: 0px;\n  scrollbar-color: #222222 #222222;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #0c0c0c;\n  border-radius: 0px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #222222;\n  border-radius: 0px;\n  border: 0px solid #222222;\n}\n\n[_ngcontent-%COMP%]::selection {\n  background: var(--main_color_1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvRUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUM7RUFDRywrQkFBQTtBQUNKIiwiZmlsZSI6InNldHRpbmdzLXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfZmxleCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NjlweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmlubmVyX2NvbnRhaW5lcl9mbGV4IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2hhZG93X2JveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCB2YXIoLS1zaGFkb3dfc2l6ZSkgMXB4IHZhcigtLXNoYWRvd19jb2xvcikgaW5zZXQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogOTIlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4qIHtcbiAgICBzY3JvbGxiYXItd2lkdGg6IDBweDtcbiAgICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMSkgcmdiYSgzNCwgMzQsIDM0LCAxKTtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwcHg7XG59XG5cbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTIsIDEyLCAxMik7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAxKTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgzNCwgMzQsIDM0LCAxKTtcbn1cblxuIDo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluX2NvbG9yXzEpO1xufSJdfQ== */"] });


/***/ }),

/***/ 27619:
/*!*********************************************************************!*\
  !*** ./src/app/components/toggle-button/toggle-button.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleButtonComponent": () => (/* binding */ ToggleButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 48750);



class ToggleButtonComponent {
    constructor() {
        this.isSelected = false;
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.text = "Button";
    }
    ngOnInit() {
    }
    onClick() {
        this.isSelected = true;
        this.buttonClick.emit();
    }
}
ToggleButtonComponent.ɵfac = function ToggleButtonComponent_Factory(t) { return new (t || ToggleButtonComponent)(); };
ToggleButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleButtonComponent, selectors: [["app-toggle-button"]], inputs: { isSelected: "isSelected", text: "text" }, outputs: { buttonClick: "buttonClick" }, decls: 2, vars: 2, consts: [[1, "clicky_button", 3, "ngClass", "click"]], template: function ToggleButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleButtonComponent_Template_button_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isSelected == true ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".clicky_button[_ngcontent-%COMP%] {\n  background: var(--darker_background_color);\n  border-radius: 5px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 5px;\n  padding-bottom: 4px;\n  color: white;\n  margin: 5px;\n  margin-top: 1px;\n  margin-bottom: 1px;\n  font-family: Calibre;\n  font-weight: bold;\n  font-size: 13px;\n  border: hidden;\n  transition-duration: 125ms;\n  text-align: center;\n  background-color: var(--main_background_color);\n  -webkit-user-select: none;\n  user-select: none;\n  outline: none;\n  height: 25px;\n  width: 100%;\n}\n\n.clicky_button[_ngcontent-%COMP%]:hover {\n  transition-duration: 125ms;\n  cursor: pointer;\n  color: var(--main_color_1);\n  text-shadow: 0px 0px 12px #ff1375;\n}\n\n.clicky_button[_ngcontent-%COMP%]:active {\n  transition-duration: 125ms;\n  color: #b8003d;\n}\n\n.selected[_ngcontent-%COMP%] {\n  transition-duration: 125ms;\n  cursor: pointer;\n  color: var(--main_color_1);\n  text-shadow: 0px 0px 12px #ff1375;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZ2dsZS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0VBR0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtBQUNKIiwiZmlsZSI6InRvZ2dsZS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpY2t5X2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFya2VyX2JhY2tncm91bmRfY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjVtcztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbl9iYWNrZ3JvdW5kX2NvbG9yKTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xpY2t5X2J1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTI1bXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluX2NvbG9yXzEpO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDEycHggcmdiKDI1NSwgMTksIDExNyk7XG59XG5cbi5jbGlja3lfYnV0dG9uOmFjdGl2ZSB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTI1bXM7XG4gICAgY29sb3I6IHJnYigxODQsIDAsIDYxKTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjVtcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTJweCByZ2IoMjU1LCAxOSwgMTE3KTtcbn0iXX0= */"] });


/***/ }),

/***/ 54190:
/*!*************************************************************!*\
  !*** ./src/app/components/tx-module/tx-module.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TxModuleComponent": () => (/* binding */ TxModuleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 48750);



function TxModuleComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.tokenInfo.tokenLogoURI, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TxModuleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \uF059 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TxModuleComponent {
    constructor() {
        this.tokenLabel = "";
        this.tokenAmount = 0;
        this.tokenImgURI = "https://snowtrace.io/images/main/empty-token.png";
        this.tokenInfo = {
            tokenName: '',
            tokenSymbol: '',
            tokenAddress: '',
            tokenDecimals: 0,
            tokenBalance: 0,
            tokenLogoURI: 'https://snowtrace.io/images/main/empty-token.png'
        };
        this.moduleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    clickModule() {
        this.moduleClick.emit(this.tokenInfo);
    }
}
TxModuleComponent.ɵfac = function TxModuleComponent_Factory(t) { return new (t || TxModuleComponent)(); };
TxModuleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TxModuleComponent, selectors: [["app-tx-module"]], inputs: { tokenLabel: "tokenLabel", tokenAmount: "tokenAmount", tokenImgURI: "tokenImgURI", tokenInfo: "tokenInfo" }, outputs: { moduleClick: "moduleClick" }, decls: 7, vars: 4, consts: [[1, "module_box", 3, "click"], ["class", "module_icon", 3, "src", 4, "ngIf"], ["class", "module_icon", 4, "ngIf"], [1, "left_label"], [1, "right_label"], [1, "module_icon", 3, "src"], [1, "module_icon"]], template: function TxModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TxModuleComponent_Template_div_click_0_listener() { return ctx.clickModule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TxModuleComponent_img_1_Template, 1, 1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TxModuleComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tokenInfo.tokenLogoURI != "" && ctx.tokenInfo.tokenLogoURI != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tokenInfo.tokenLogoURI == "" || ctx.tokenInfo.tokenLogoURI == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tokenInfo.tokenSymbol, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tokenInfo.tokenBalance, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".module_box[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  background-color: #1e1e1e;\n  border-style: solid;\n  border-color: var(--main_background_color);\n  border-width: 2px;\n  margin: 11px;\n  padding: 5px;\n  height: 40px;\n  width: 265px;\n  border-radius: 10px;\n  align-items: center;\n  transition-duration: 180ms;\n}\n\n.module_box[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 4px #0f0f0f;\n  transition-duration: 180ms;\n  cursor: pointer;\n  color: var(--main_color_1);\n  text-shadow: 0px 0px 5px var(--main_color_1);\n}\n\n.left_label[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.right_label[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-size: 13px;\n  flex-grow: 1;\n  justify-self: flex-end;\n  text-align: right;\n}\n\n.module_icon[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-right: 8px;\n  height: 32px;\n  width: 32px;\n  border-radius: 8px;\n  font-size: 30px;\n  font-family: fonticon_awesome;\n  justify-self: flex-start;\n  background: #333333;\n  box-shadow: 0px 0px 8px inset #0a0a0a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR4LW1vZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUdBLHlCQUFBO0VBR0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFJQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSwwQkFBQTtBQVRKOztBQVlBO0VBR0ksK0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDRDQUFBO0FBWEo7O0FBY0E7RUFDSSxlQUFBO0FBWEo7O0FBYUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBVko7O0FBYUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUVBLHdCQUFBO0VBRUEsbUJBQUE7RUFDQSxxQ0FBQTtBQWRKIiwiZmlsZSI6InR4LW1vZHVsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGVfYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbl9iYWNrZ3JvdW5kX2NvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XG4gXG5cbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbl9iYWNrZ3JvdW5kX2NvbG9yKTtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcblxuICAgIG1hcmdpbjogMTFweDtcbiAgICBwYWRkaW5nOiA1cHg7XG5cblxuXG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAyNjVweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDE4MG1zO1xufVxuXG4ubW9kdWxlX2JveDpob3ZlcntcbiAgICBcbiAgICAvL2JveC1zaGFkb3c6IC0ycHggMHB4IDBweCB2YXIoLS1tYWluX2NvbG9yXzEpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYigxNSwgMTUsIDE1KTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxODBtcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLW1haW5fY29sb3JfMSk7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLW1haW5fY29sb3JfMSk7XG59XG5cbi5sZWZ0X2xhYmVse1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5yaWdodF9sYWJlbHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tb2R1bGVfaWNvbntcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuXG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogZm9udGljb25fYXdlc29tZTtcblxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcblxuICAgIGJhY2tncm91bmQ6IHJnYig1MSwgNTEsIDUxKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCBpbnNldCByZ2IoMTAsIDEwLCAxMCk7XG59Il19 */"] });


/***/ }),

/***/ 16603:
/*!***********************************************************************!*\
  !*** ./src/app/components/unlock-button/default-button2.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultButton2Component": () => (/* binding */ DefaultButton2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);


class DefaultButton2Component {
    constructor() {
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.text = "Button";
        this.height = 26;
        this.width = 76;
    }
    ngOnInit() {
    }
    onClick() {
        this.buttonClick.emit();
    }
}
DefaultButton2Component.ɵfac = function DefaultButton2Component_Factory(t) { return new (t || DefaultButton2Component)(); };
DefaultButton2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultButton2Component, selectors: [["app-default-button2"]], inputs: { text: "text", height: "height", width: "width" }, outputs: { buttonClick: "buttonClick" }, decls: 2, vars: 5, consts: [[1, "unlock_button2", 3, "click"]], template: function DefaultButton2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultButton2Component_Template_button_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height, "px")("width", ctx.width, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
    } }, styles: [".unlock_button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 14px 0px;\n  width: 100%;\n  border-radius: 6px;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  color: white;\n  font-family: Calibre-Regular;\n  pointer-events: auto;\n  border: none;\n  outline-color: transparent;\n  outline-style: none;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background: #151515;\n}\n\n.unlock_button2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 10px 0px;\n  width: 100%;\n  border-radius: 6px;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n  color: white;\n  pointer-events: auto;\n  border: none;\n  outline-color: transparent;\n  outline-style: none;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background: #131419;\n}\n\n.unlock_button2[_ngcontent-%COMP%]:before {\n  position: absolute;\n  width: inherit;\n  top: 164px;\n  left: 15px;\n  border-radius: 8px;\n  height: 1px;\n  background: radial-gradient(50% 6697800% at 50% 50%, #212124 0%, rgba(23, 24, 28, 0) 100%);\n}\n\n.clicky_button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(77, 68, 206, 0.795);\n  transition-duration: 80ms;\n  cursor: pointer;\n  color: rgba(114, 104, 255, 0.651);\n}\n\n.clicky_button[_ngcontent-%COMP%]:active {\n  background-color: #0e0e0e;\n  transition-duration: 80ms;\n  text-shadow: 0px 0px 6px #fa255a;\n  color: #fa255a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtYnV0dG9uMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEZBQUE7QUFDSjs7QUFHQTtFQUNJLDBDQUFBO0VBRUEseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0VBR0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7QUFISiIsImZpbGUiOiJkZWZhdWx0LWJ1dHRvbjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudW5sb2NrX2J1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMTRweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogQ2FsaWJyZS1SZWd1bGFyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgYmFja2dyb3VuZDogIzE1MTUxNTtcbn1cblxuLnVubG9ja19idXR0b24yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGJhY2tncm91bmQ6ICMxMzE0MTk7XG59XG5cbi51bmxvY2tfYnV0dG9uMjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICB0b3A6IDE2NHB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCg1MCUgNjY5NzgwMCUgYXQgNTAlIDUwJSwgIzIxMjEyNCAwJSwgcmdiYSgyMywgMjQsIDI4LCAwKSAxMDAlKTtcbn1cblxuXG4uY2xpY2t5X2J1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NywgNjgsIDIwNiwgMC43OTUpO1xuICAgIC8vYm94LXNoYWRvdzogMHB4IDBweCA1cHggYmxhY2s7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogODBtcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMTE0LCAxMDQsIDI1NSwgMC42NTEpO1xufVxuXG4uY2xpY2t5X2J1dHRvbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMTQsIDE0KTtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5fYmFja2dyb3VuZF9jb2xvcik7XG4gICAgLy9ib3gtc2hhZG93OiAwcHggMHB4IDJweCBibGFjaztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA4MG1zO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCByZ2IoMjUwLCAzNywgOTApO1xuICAgIGNvbG9yOiByZ2IoMjUwLCAzNywgOTApO1xufSJdfQ== */"] });


/***/ }),

/***/ 77774:
/*!*******************************************************************************!*\
  !*** ./src/app/components/unlock-wallet-page/unlock-wallet-page.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnlockWalletPageComponent": () => (/* binding */ UnlockWalletPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var _metamask_browser_passworder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @metamask/browser-passworder */ 90217);
/* harmony import */ var _metamask_browser_passworder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_metamask_browser_passworder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! metro_scripts/src/api/metroRPC */ 62402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _input_fancy_input_fancy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input-fancy/input-fancy.component */ 17427);
/* harmony import */ var _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../default-button/default-button.component */ 43775);
/* harmony import */ var _pincode_input_pincode_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pincode-input/pincode-input.component */ 78660);









function UnlockWalletPageComponent_div_15_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please enter the correct password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UnlockWalletPageComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UnlockWalletPageComponent_div_15_h4_1_Template, 2, 0, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-input-fancy", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("inputTextEvent", function UnlockWalletPageComponent_div_15_Template_app_input_fancy_inputTextEvent_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.updatePassword($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-default-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("buttonClick", function UnlockWalletPageComponent_div_15_Template_app_default_button_buttonClick_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.submitPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Powered by Dijets Protocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.enteredWrongPassword == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("inputWidth", 260)("inputHeight", 22);
} }
function UnlockWalletPageComponent_div_16_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please enter a Valid pincode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UnlockWalletPageComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UnlockWalletPageComponent_div_16_h4_1_Template, 2, 0, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "app-pincode-input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("inputTextEvent", function UnlockWalletPageComponent_div_16_Template_app_pincode_input_inputTextEvent_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.updatePincode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "app-default-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("buttonClick", function UnlockWalletPageComponent_div_16_Template_app_default_button_buttonClick_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.decryptSeed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Powered by Dijets Protocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.enteredWrongPin == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pinBoxWidth", 20)("pinBoxHeight", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", 120)("height", 35);
} }
class UnlockWalletPageComponent {
    constructor() {
        this.seedStages = src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.WalletUnlockStages;
        this.seedStage = src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.WalletUnlockStages.PINCODE;
        this.encryptedSeed = '';
        this.onSeedDecrypt = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.enteredPassword = '';
        this.enteredPincode = '';
        this.enteredWrongPin = false;
        this.enteredWrongPassword = false;
        this.currentSeedData = '';
        this.hasEnteredPassword = false;
    }
    ngOnInit() {
    }
    updatePassword(event) {
        this.enteredPassword = event;
    }
    updatePincode(event) {
        this.enteredPincode = event.join('');
        if (this.enteredPincode.length >= 6) {
            this.decryptSeed();
        }
    }
    //Decrypts the seed that should be at the last layer of encryption
    decryptSeed() {
        if (this.seedStage == src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.WalletUnlockStages.PINCODE) {
            this.currentSeedData = this.encryptedSeed;
        }
        //This entire thing is a bit of a mess, might change it later to make it look nicer...
        (0,_metamask_browser_passworder__WEBPACK_IMPORTED_MODULE_1__.decrypt)(this.enteredPincode, this.currentSeedData).then((decipheredResult) => {
            var _a;
            this.enteredWrongPin = true;
            this.onSeedDecrypt.emit(decipheredResult);
            //cache the pin-encrypted seed so we can keep unlocking wallet with only the pin-code, as an extra security step.
            (_a = navigator.serviceWorker.controller) === null || _a === void 0 ? void 0 : _a.postMessage({
                method: metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_2__.MetroRPC.INIT_WORKER_VAULT,
                pinEncryptedSeed: this.currentSeedData
            });
        }).catch((error) => {
            this.enteredWrongPin = true;
        });
    }
    submitPassword() {
        (0,_metamask_browser_passworder__WEBPACK_IMPORTED_MODULE_1__.decrypt)(this.enteredPassword, this.encryptedSeed).then((result) => {
            this.enteredWrongPassword = false;
            this.currentSeedData = result;
            this.hasEnteredPassword = true;
        }).catch((error) => {
            this.enteredWrongPassword = true;
            this.hasEnteredPassword = false;
        });
    }
}
UnlockWalletPageComponent.ɵfac = function UnlockWalletPageComponent_Factory(t) { return new (t || UnlockWalletPageComponent)(); };
UnlockWalletPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UnlockWalletPageComponent, selectors: [["app-unlock-wallet-page"]], inputs: { seedStage: "seedStage", encryptedSeed: "encryptedSeed" }, outputs: { onSeedDecrypt: "onSeedDecrypt" }, decls: 17, vars: 2, consts: [[1, "container_flex", 2, "align-content", "center", "justify-content", "center", "height", "100%"], [1, "custom-1ggczkb2", "eft27bk8"], ["height", "46", 1, "sc-iJKOTD", "EFDTL"], ["size", "16", "color", "#ffffff", "opacity", "1", 1, "sc-hKwDye", "gYyHxJ"], [1, "sc-jEieoE", "bCTywW"], ["id", "modal"], [2, "margin-top", "36px", "margin-bottom", "10px"], ["width", "145px", "height", "16.2574px", "id", "tabby", "xmlns", "http://www.w3.org/2000/svg", 1, "decypherLogo"], ["d", "M142.841,7.342h-3.274a2.263,2.263,0,0,1-1.823-.772,2.548,2.548,0,0,1-.6-1.716,2.16,2.16,0,0,1,.716-1.769A2.332,2.332,0,0,1,139.45,2.6h.331v0h4.174a1.045,1.045,0,0,0,0-2.09H139.43a4.144,4.144,0,0,0-2.907,1.027,4.315,4.315,0,0,0-1.414,3.326,4.335,4.335,0,0,0,2.753,4.32,7.149,7.149,0,0,0,2.215.256h2.765V16.1H145V7.341h-2.159Zm-3.62,3.471a1.112,1.112,0,0,0-1.488.512l-.081.168-.01.022-2.26,4.742h2.462l1.889-3.956a1.113,1.113,0,0,0-.512-1.488ZM124.749,2.284a1.05,1.05,0,0,0,0-2.1h-8.456v2.1Zm-.573,11.667h0a1.057,1.057,0,0,1,.952.484,1.152,1.152,0,0,1-.952,1.787h-8.168V7.573H123.7V9.52h-5.488v4.431Zm-19.354,2.013a1.105,1.105,0,0,1-1.105-1.105v0h0V9.289H97.928v6.675h-2.21V.285h2.21V7.312h8v7.545h0v0A1.105,1.105,0,0,1,104.822,15.964Zm1.105-14.436a1.053,1.053,0,0,0-2.105,0V6.209h2.105V1.528Zm-24,6a2.308,2.308,0,0,0,1.859-.787,2.6,2.6,0,0,0,.61-1.75,2.208,2.208,0,0,0-.73-1.8,2.385,2.385,0,0,0-1.619-.492l-4.593,0a1.066,1.066,0,1,1,0-2.131h4.613A4.227,4.227,0,0,1,85.036,1.6a4.4,4.4,0,0,1,1.441,3.391,4.42,4.42,0,0,1-2.806,4.4,7.317,7.317,0,0,1-2.259.261H78.594V16.2h-2.2V7.523Zm-17.5,6.284H62.252v2.156h2.182Zm-.025-3.266H62.226V12.7h2.183Zm0-9.373a1.021,1.021,0,0,0-2.042,0V9.536h2.042ZM49.1,12.181a3.467,3.467,0,0,1-.318.452,2.565,2.565,0,0,1-.8.657,2.809,2.809,0,0,1-2.045.187A2.939,2.939,0,0,1,43.9,10.756c-.023-.521-.02-1.043-.021-1.564,0-.284,0-.283,0-.567a4.26,4.26,0,0,0-.024-.706,1.088,1.088,0,0,0-2.16.194c-.014.662,0,1.04,0,1.7a10.439,10.439,0,0,0,.177,2.428,5.041,5.041,0,0,0,6.482,3.463,5.04,5.04,0,0,0,2.916-2.766l-2.041-.988-.134.229ZM46.749.279H46.7a4.774,4.774,0,0,0-3.212,1.138A6.117,6.117,0,0,0,41.8,4.523a1.03,1.03,0,0,0,2.009.453,3.108,3.108,0,0,1,2.815-2.643h0l.065,0a3.014,3.014,0,0,1,3.01,2.3l1.876-.808A4.946,4.946,0,0,0,46.749.279ZM31.027,16.18h.128v-.287h-.128v.287M22.6,13.935a1.05,1.05,0,0,0,0,2.1H31.06v-2.1Zm.458-11.163h0a1.059,1.059,0,0,1-.952-.484A1.152,1.152,0,0,1,23.061.5h8.168V9.15H23.536V7.2h5.488V2.772ZM11.005,4.444a32.284,32.284,0,0,1,.117,3.228q0,2.43-.112,3.419a5.907,5.907,0,0,1-.626,2.008A4.8,4.8,0,0,1,6.048,15.72L0,15.726V7.963A1.092,1.092,0,0,1,1.1,6.877,1.092,1.092,0,0,1,2.2,7.963v5.608H6.029a2.676,2.676,0,0,0,2.187-1.31,3.346,3.346,0,0,0,.568-1.491c.062-.6.092-1.791.092-3.186,0-1.432-.041-2.408-.092-2.931C8.548,2.2,5.556,2.287,5.556,2.287H0V0H5.657S10.816-.156,11.005,4.444ZM6.7,8.42H4.5v2.174H6.7Zm0-2.766H4.5V7.828H6.7Z", 2, "fill", "#fff"], [1, "welcomeText", 2, "margin-bottom", "4px", "font-family", "Calibre", "font-size", "16px", "color", "#525252"], ["_ngcontent-udi-c37", "", "data-v-586cb64d", "", 2, "font-family", "Calibre", "font-size", "16px"], ["_ngcontent-udi-c37", "", "data-v-586cb64d", "", 1, "styled"], [2, "margin-top", "110px"], [4, "ngIf"], ["style", "display: flex; width: 100%; justify-content: center; align-items: center; height: 100%; flex-direction: column;", 4, "ngIf"], ["class", "glowyText", "style", "margin-top: 2px; margin-bottom: 4px;  font-weight: normal;", 4, "ngIf"], ["inputType", "password", "placeholder", "Password", 3, "inputWidth", "inputHeight", "inputTextEvent"], [2, "margin-top", "16px"], ["text", "Next", 3, "buttonClick"], [2, "margin-top", "134px", "margin-bottom", "0px", "padding", "-6px 50px", "font-size", "12px", "text-transform", "uppercase", "font-weight", "400", "letter-spacing", "0.6px", "color", "#787878", "font-family", "Calibre", "z-index", "4"], [1, "glowyText", 2, "margin-top", "2px", "margin-bottom", "4px", "font-weight", "normal"], [2, "display", "flex", "width", "100%", "justify-content", "center", "align-items", "center", "height", "100%", "flex-direction", "column"], ["class", "glowyText", "style", "margin-top: 2px;  margin-bottom: 2px;  font-weight: normal;", 4, "ngIf"], [2, "width", "280px"], ["placeholder", "Enter Pin-code", 3, "pinBoxWidth", "pinBoxHeight", "inputTextEvent"], ["text", "Unlock", 2, "margin", "5px", 3, "width", "height", "buttonClick"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M16 18.6982H8C6.89543 18.6982 6 17.8028 6 16.6982V12.0316C6 10.927 6.89543 10.0316 8 10.0316H13.3333C13.7015 10.0316 14 9.7331 14 9.36491V8.14491C14.0232 7.08707 13.2485 6.18042 12.2 6.03824C11.6359 5.98153 11.0742 6.16694 10.6546 6.54833C10.2351 6.92972 9.99716 7.47126 10 8.03824C10 8.40643 9.70152 8.70491 9.33333 8.70491C8.96514 8.70491 8.66667 8.40643 8.66667 8.03824C8.66212 7.09456 9.05779 6.19318 9.75549 5.55776C10.4532 4.92233 11.3875 4.61241 12.3267 4.70491C14.0576 4.91553 15.3529 6.39466 15.3333 8.13824V9.36491C15.3333 10.4695 14.4379 11.3649 13.3333 11.3649H8C7.63181 11.3649 7.33333 11.6634 7.33333 12.0316V16.6982C7.33333 17.0664 7.63181 17.3649 8 17.3649H16C16.3682 17.3649 16.6667 17.0664 16.6667 16.6982V10.6982C16.6667 10.33 16.9651 10.0316 17.3333 10.0316C17.7015 10.0316 18 10.33 18 10.6982V16.6982C18 17.8028 17.1046 18.6982 16 18.6982Z", "fill", "#868F97"], [2, "margin-top", "134px", "margin-bottom", "0px", "padding", "-6px 50px", "font-size", "12px", "text-transform", "uppercase", "font-weight", "600", "letter-spacing", "0.8px", "color", "#787878", "font-family", "Calibre", "z-index", "4"], [1, "glowyText", 2, "margin-top", "2px", "margin-bottom", "2px", "font-weight", "normal"]], template: function UnlockWalletPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Welcome to Decypher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "v0.2.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, UnlockWalletPageComponent_div_15_Template, 7, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, UnlockWalletPageComponent_div_16_Template, 10, 5, "div", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.seedStage == ctx.seedStages.PASSWORD_AND_PINCODE && ctx.hasEnteredPassword == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.hasEnteredPassword == true || ctx.seedStage == ctx.seedStages.PINCODE);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _input_fancy_input_fancy_component__WEBPACK_IMPORTED_MODULE_3__.InputFancyComponent, _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__.DefaultButtonComponent, _pincode_input_pincode_input_component__WEBPACK_IMPORTED_MODULE_5__.PincodeInputComponent], styles: [".container_flex[_ngcontent-%COMP%] {\n  margin: 0px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-size: cover;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n}\n\n.EFDTL[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  margin-top: 24px;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  height: 24px;\n  width: 100%;\n}\n\n.bOghYQ[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  padding: 5px;\n  margin: -5px;\n}\n\n.bOghYQ[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #777777;\n  transition: fill 200ms ease 0s;\n}\n\n.gYyHxJ[_ngcontent-%COMP%] {\n  color: #555555;\n  text-align: center;\n  font-style: normal;\n  font-weight: 500;\n  opacity: 1;\n  font-size: 16px;\n  line-height: 25px;\n  text-decoration: none;\n  background-color: transparent;\n}\n\n.bCTywW[_ngcontent-%COMP%] {\n  width: 12px;\n}\n\n.cKEyhy[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  overflow: auto;\n  padding: 0px 20px;\n}\n\n.custom-1ggczkb2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 358px;\n  left: 32px;\n  width: 310px;\n  height: 182px;\n  pointer-events: none;\n  background-image: radial-gradient(circle at center center, #43454b 1px, #2e3141 1px, transparent 1px, transparent 100%);\n  opacity: 0.6;\n  background-repeat: repeat;\n  background-position: bottom;\n  background-size: 6px 6px;\n  -webkit-mask-image: radial-gradient(#424569, transparent 80%);\n  z-index: 0;\n}\n\n.khNeot[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1 1 0%;\n}\n\n.cLpZcH[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  height: 100%;\n  margin-top: 105px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.itebZd[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.gENblQ[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n\n.ioNWta[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  font-style: normal;\n  font-weight: 500;\n  opacity: 1;\n  font-size: 26px;\n  line-height: 31px;\n  text-decoration: none;\n  background-color: transparent;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 320px;\n}\n\n.dpsCLo[_ngcontent-%COMP%] {\n  margin-top: 26px;\n  margin-bottom: 15px;\n}\n\n.dsGxcu[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background: #181818;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #2f2f2f;\n  border-radius: 6px;\n  color: white;\n  font-size: 16px;\n  line-height: 19px;\n}\n\n.cfHWOt[_ngcontent-%COMP%] {\n  visibility: hidden;\n  margin-top: 18px;\n  text-decoration: none;\n}\n\n.extgHg[_ngcontent-%COMP%] {\n  color: #666666;\n  text-align: center;\n  font-style: normal;\n  font-weight: normal;\n  opacity: 1;\n  font-size: 16px;\n  line-height: 25px;\n  background-color: transparent;\n  text-decoration: none;\n}\n\n.boGbAB[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 14px 20px;\n}\n\n.jdiDvS[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 14px 0px;\n  width: 100%;\n  border-radius: 6px;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 19px;\n  color: white;\n  pointer-events: auto;\n  border: none;\n  outline-color: transparent;\n  outline-style: none;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background: #4e44ce;\n}\n\n.fOaBQc[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  left: 0px;\n  bottom: 0px;\n}\n\n.boDOmS[_ngcontent-%COMP%] {\n  background-color: #222222;\n  min-width: 360px;\n  min-height: 540px;\n  height: 100vh;\n  width: 100vw;\n  border: 1px solid #323232;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden;\n}\n\n.tabbys_style[_ngcontent-%COMP%] {\n  fill: var(--main_color_1);\n}\n\n.glowyText[_ngcontent-%COMP%] {\n  color: var(--main_color_1);\n  text-shadow: 0px 0px 5px var(--main_color_1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVubG9jay13YWxsZXQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUhBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkRBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSw4QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7RUFFQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBR0E7RUFDSSwwQkFBQTtFQUNBLDRDQUFBO0FBQUoiLCJmaWxlIjoidW5sb2NrLXdhbGxldC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9mbGV4IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5FRkRUTCB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYk9naFlRIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IC01cHg7XG59XG5cbi5iT2doWVEgc3ZnIHtcbiAgICBmaWxsOiByZ2IoMTE5LCAxMTksIDExOSk7XG4gICAgdHJhbnNpdGlvbjogZmlsbCAyMDBtcyBlYXNlIDBzO1xufVxuXG4uZ1l5SHhKIHtcbiAgICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5iQ1R5d1cge1xuICAgIHdpZHRoOiAxMnB4O1xufVxuXG4uY0tFeWh5IHtcbiAgICBmbGV4OiAxIDEgMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5jdXN0b20tMWdnY3prYjIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM1OHB4O1xuICAgIGxlZnQ6IDMycHg7XG4gICAgd2lkdGg6IDMxMHB4O1xuICAgIGhlaWdodDogMTgycHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIgY2VudGVyLCAjNDM0NTRiIDFweCwgIzJlMzE0MSAxcHgsIHRyYW5zcGFyZW50IDFweCwgdHJhbnNwYXJlbnQgMTAwJSk7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNnB4IDZweDtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgjNDI0NTY5LCB0cmFuc3BhcmVudCA4MCUpO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi5raE5lb3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4OiAxIDEgMCU7XG59XG5cbi5jTHBaY0gge1xuICAgIGZsZXg6IDEgMSAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLml0ZWJaZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5nRU5ibFEge1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5pb05XdGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMxcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xufVxuXG4uZHBzQ0xvIHtcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5kc0d4Y3Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDI0LCAyNCwgMjQpO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDcsIDQ3LCA0Nyk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi5jZkhXT3Qge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmV4dGdIZyB7XG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYm9HYkFCIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG59XG5cbi5qZGlEdlMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMTRweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGJhY2tncm91bmQ6IHJnYig3OCwgNjgsIDIwNik7XG59XG5cbi5mT2FCUWMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbn1cblxuLmJvRE9tUyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xuICAgIG1pbi13aWR0aDogMzYwcHg7XG4gICAgbWluLWhlaWdodDogNTQwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDUwLCA1MCwgNTApO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhYmJ5c19zdHlsZSB7XG4gICAgZmlsbDogdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICAvL2ZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCA1cHggdmFyKC0tbWFpbl9jb2xvcl8xKSk7XG59XG5cbi5nbG93eVRleHQge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluX2NvbG9yXzEpO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1tYWluX2NvbG9yXzEpO1xufSJdfQ== */"] });


/***/ }),

/***/ 55764:
/*!******************************************************************!*\
  !*** ./src/app/tx-history-module/tx-history-module.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TxHistoryModuleComponent": () => (/* binding */ TxHistoryModuleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var src_metro_backend_txHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/metro_backend/txHistory */ 64469);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 48750);




function TxHistoryModuleComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Sent Asset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class TxHistoryModuleComponent {
    constructor() {
        this.transaction = {
            txType: 'owu',
            txHash: '',
            txAmount: '',
            assetName: 'Bug',
            assetSymbol: '',
            recipentAddress: '',
            transactionDate: '',
            transactionState: src_metro_backend_txHistory__WEBPACK_IMPORTED_MODULE_0__.TransactionStates.SUCCESS
        };
        this.moduleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    clickModule() {
        this.moduleClick.emit(this.transaction.txHash);
    }
}
TxHistoryModuleComponent.ɵfac = function TxHistoryModuleComponent_Factory(t) { return new (t || TxHistoryModuleComponent)(); };
TxHistoryModuleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TxHistoryModuleComponent, selectors: [["app-tx-history-module"]], inputs: { transaction: "transaction" }, outputs: { moduleClick: "moduleClick" }, decls: 9, vars: 4, consts: [[2, "display", "flex", "flex-direction", "column", "box-sizing", "border-box", "width", "auto"], [1, "module_box", 2, "padding", "4px", "padding-top", "6px", 3, "click"], [1, "module_icon"], ["class", "left_label", 4, "ngIf"], [1, "right_label"], [2, "margin", "3px"], [1, "left_label"]], template: function TxHistoryModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TxHistoryModuleComponent_Template_div_click_1_listener() { return ctx.clickModule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \uF3BF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TxHistoryModuleComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.transaction.txType == "SEND ASSET");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.transaction.txAmount, " ", ctx.transaction.assetSymbol, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.transaction.transactionDate, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".module_box[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  background-color: #1e1e1e;\n  border-style: solid;\n  border-color: var(--main_background_color);\n  border-width: 2px;\n  margin: 8px;\n  margin-bottom: 4px;\n  padding: 5px;\n  height: 40px;\n  width: 265px;\n  border-radius: 10px;\n  align-items: center;\n  transition-duration: 180ms;\n}\n\n.module_box[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 4px #0f0f0f;\n  transition-duration: 180ms;\n  cursor: pointer;\n  color: var(--main_color_1);\n  text-shadow: 0px 0px 5px var(--main_color_1);\n}\n\n.left_label[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.right_label[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-size: 13px;\n  flex-grow: 1;\n  justify-self: flex-end;\n  text-align: right;\n}\n\n.vertical_seperator[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 2px;\n  height: 15px;\n  border-radius: 20%;\n  align-self: center;\n}\n\n.module_icon[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-right: 8px;\n  height: 32px;\n  width: 32px;\n  border-radius: 8px;\n  font-size: 30px;\n  font-family: fonticon_awesome;\n  justify-self: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR4LWhpc3RvcnktbW9kdWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7RUFHQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBSUEsWUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsMEJBQUE7QUFSSjs7QUFXQTtFQUVJLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSw0Q0FBQTtBQVRKOztBQVlBO0VBQ0ksZUFBQTtBQVRKOztBQVdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVdBO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFSSjs7QUFXQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBRUEsd0JBQUE7QUFWSiIsImZpbGUiOiJ0eC1oaXN0b3J5LW1vZHVsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGVfYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMzAsIDMwKTtcblxuXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW5fYmFja2dyb3VuZF9jb2xvcik7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG5cbiAgICBtYXJnaW46IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgcGFkZGluZzogNXB4O1xuXG5cblxuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMjY1cHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxODBtcztcbn1cblxuLm1vZHVsZV9ib3g6aG92ZXJ7XG4gICAgXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiKDE1LCAxNSwgMTUpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDE4MG1zO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tbWFpbl9jb2xvcl8xKTtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tbWFpbl9jb2xvcl8xKTtcbn1cblxuLmxlZnRfbGFiZWx7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLnJpZ2h0X2xhYmVse1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnZlcnRpY2FsX3NlcGVyYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm1vZHVsZV9pY29ue1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG5cbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogZm9udGljb25fYXdlc29tZTtcblxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcblxuICAgIC8vYmFja2dyb3VuZDogcmdiKDUxLCA1MSwgNTEpO1xuICAgIC8vYm94LXNoYWRvdzogMHB4IDBweCA4cHggIHJnYigxMCwgMTAsIDEwKTtcbn0iXX0= */"] });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 27532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production = true;
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 99232:
/*!************************************************!*\
  !*** ./src/metro_backend/IWalletInterfaces.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletTypes": () => (/* binding */ WalletTypes),
/* harmony export */   "Account": () => (/* binding */ Account)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ 29225);

var WalletTypes;
(function (WalletTypes) {
    WalletTypes[WalletTypes["Phrase"] = 0] = "Phrase";
    WalletTypes[WalletTypes["Ledger"] = 1] = "Ledger";
    WalletTypes[WalletTypes["Trezor"] = 2] = "Trezor";
})(WalletTypes || (WalletTypes = {}));
//class Account represents a pubkey/privkey/address at a certain derivation path index.
class Account {
    constructor(privateKey, index) {
        this.wallet = new ethers__WEBPACK_IMPORTED_MODULE_0__.Wallet(privateKey);
        this.index = index;
        //this.wallet.signTransaction
        //this.wallet = Wallet.createRandom();
    }
}


/***/ }),

/***/ 64469:
/*!****************************************!*\
  !*** ./src/metro_backend/txHistory.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionStates": () => (/* binding */ TransactionStates),
/* harmony export */   "addNewTransaction": () => (/* binding */ addNewTransaction)
/* harmony export */ });
/* harmony import */ var _Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! metro_scripts/src/api/metroRPC */ 62402);


/* --- Note # xdjtx # we are one @
    txHistory.ts contains interfaces and functions that are used for the transaction history system
    metro has.
*/

var TransactionStates;

(function (TransactionStates) {
  TransactionStates[TransactionStates["PENDING"] = 0] = "PENDING";
  TransactionStates[TransactionStates["SUCCESS"] = 1] = "SUCCESS";
  TransactionStates[TransactionStates["FAILED"] = 2] = "FAILED";
})(TransactionStates || (TransactionStates = {}));

function addNewTransaction(_x) {
  return _addNewTransaction.apply(this, arguments);
}

function _addNewTransaction() {
  _addNewTransaction = (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (txToAdd) {
    var _a;

    (_a = navigator.serviceWorker.controller) === null || _a === void 0 ? void 0 : _a.postMessage({
      method: metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_1__.MetroRPC.ADD_TRANSACTION,
      data: txToAdd
    });
  });
  return _addNewTransaction.apply(this, arguments);
}

/***/ }),

/***/ 5381:
/*!************************************!*\
  !*** ./src/metro_backend/utils.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTokenName": () => (/* binding */ getTokenName),
/* harmony export */   "getTokenSymbol": () => (/* binding */ getTokenSymbol),
/* harmony export */   "getTokenDecimals": () => (/* binding */ getTokenDecimals),
/* harmony export */   "getTransactionReceipt": () => (/* binding */ getTransactionReceipt),
/* harmony export */   "addTokenToList": () => (/* binding */ addTokenToList)
/* harmony export */ });
/* harmony import */ var _Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var avalanche__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! avalanche */ 45493);
/* harmony import */ var avalanche__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(avalanche__WEBPACK_IMPORTED_MODULE_1__);


/**Retruns the token Name of the given token address, if it exists...
 */

function getTokenName(_x) {
  return _getTokenName.apply(this, arguments);
}
/**Gets the token symbol
 */

function _getTokenName() {
  _getTokenName = (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tokenAddress) {
    let nodeDetails = {
      IP: 'dijets.uksouth.cloudapp.azure.com',
      PORT: 443,
      NETWORK_ID: 12345,
      CHAIN_ID: 43112,
      PROTOCOL: 'https'
    };

    if (localStorage.getItem("NetworkSettings")) {
      nodeDetails = JSON.parse(localStorage.getItem("NetworkSettings") || "{}");
    } else {
      localStorage.setItem("NetworkSettings", JSON.stringify(nodeDetails));
    }

    let cChain = new avalanche__WEBPACK_IMPORTED_MODULE_1__.Avalanche(nodeDetails.IP, nodeDetails.PORT, nodeDetails.PROTOCOL, nodeDetails.NETWORK_ID).CChain();
    let tx = {
      /*name()*/
      "data": "0x06fdde03",
      "to": tokenAddress
    };
    return cChain.callMethod("eth_call", [tx, "latest"], "ext/bc/C/rpc");
  });
  return _getTokenName.apply(this, arguments);
}

function getTokenSymbol(_x2) {
  return _getTokenSymbol.apply(this, arguments);
}
/**
 * Gets the smallest denomination of the token, i.e the smallest "piece" it can be divided into.
 */

function _getTokenSymbol() {
  _getTokenSymbol = (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tokenAddress) {
    let nodeDetails = {
      IP: 'dijets.uksouth.cloudapp.azure.com',
      PORT: 443,
      NETWORK_ID: 1,
      CHAIN_ID: 43112,
      PROTOCOL: 'https'
    };

    if (localStorage.getItem("NetworkSettings")) {
      nodeDetails = JSON.parse(localStorage.getItem("NetworkSettings") || "{}");
    } else {
      localStorage.setItem("NetworkSettings", JSON.stringify(nodeDetails));
    }

    let cChain = new avalanche__WEBPACK_IMPORTED_MODULE_1__.Avalanche(nodeDetails.IP, nodeDetails.PORT, nodeDetails.PROTOCOL, nodeDetails.NETWORK_ID).CChain();
    let tx = {
      /*name()*/
      "data": "0x95d89b41",
      "to": tokenAddress
    };
    return cChain.callMethod("eth_call", [tx, "latest"], "ext/bc/C/rpc");
  });
  return _getTokenSymbol.apply(this, arguments);
}

function getTokenDecimals(_x3) {
  return _getTokenDecimals.apply(this, arguments);
}
/**
 * Gets the transaction receipt
 */

function _getTokenDecimals() {
  _getTokenDecimals = (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tokenAddress) {
    let nodeDetails = {
      IP: 'dijets.uksouth.cloudapp.azure.com',
      PORT: 443,
      NETWORK_ID: 12345,
      CHAIN_ID: 43112,
      PROTOCOL: 'https'
    };

    if (localStorage.getItem("NetworkSettings")) {
      nodeDetails = JSON.parse(localStorage.getItem("NetworkSettings") || "{}");
    } else {
      localStorage.setItem("NetworkSettings", JSON.stringify(nodeDetails));
    }

    let cChain = new avalanche__WEBPACK_IMPORTED_MODULE_1__.Avalanche(nodeDetails.IP, nodeDetails.PORT, nodeDetails.PROTOCOL, nodeDetails.NETWORK_ID).CChain();
    let tx = {
      /*name()*/
      "data": "0x313ce567",
      "to": tokenAddress
    };
    return cChain.callMethod("eth_call", [tx, "latest"], "ext/bc/C/rpc");
  });
  return _getTokenDecimals.apply(this, arguments);
}

function getTransactionReceipt(_x4) {
  return _getTransactionReceipt.apply(this, arguments);
}
/**
 * Adds a new token to the list, I will change the entire behaviour of the token list eventually so this is temporary.
 */

function _getTransactionReceipt() {
  _getTransactionReceipt = (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (txHash) {
    let nodeDetails = {
      IP: 'dijets.uksouth.cloudapp.azure.com',
      PORT: 443,
      NETWORK_ID: 12345,
      CHAIN_ID: 43112,
      PROTOCOL: 'https'
    };

    if (localStorage.getItem("NetworkSettings")) {
      nodeDetails = JSON.parse(localStorage.getItem("NetworkSettings") || "{}");
    } else {
      localStorage.setItem("NetworkSettings", JSON.stringify(nodeDetails));
    }

    let cChain = new avalanche__WEBPACK_IMPORTED_MODULE_1__.Avalanche(nodeDetails.IP, nodeDetails.PORT, nodeDetails.PROTOCOL, nodeDetails.NETWORK_ID).CChain();
    return cChain.callMethod("eth_getTransactionReceipt", [txHash], "ext/bc/C/rpc");
  });
  return _getTransactionReceipt.apply(this, arguments);
}

function addTokenToList(token, addressIndex) {
  let nodeDetails = {
    IP: 'dijets.uksouth.cloudapp.azure.com',
    PORT: 443,
    NETWORK_ID: 12345,
    CHAIN_ID: 43112,
    PROTOCOL: 'https'
  };

  if (localStorage.getItem("NetworkSettings")) {
    nodeDetails = JSON.parse(localStorage.getItem("NetworkSettings") || "{}");
  } else {
    localStorage.setItem("NetworkSettings", JSON.stringify(nodeDetails));
  }

  let currentTokensList = JSON.parse(localStorage.getItem("TokenCache" + nodeDetails.CHAIN_ID + "_" + addressIndex) || "{}");
  currentTokensList.tokenVault.tokens.push({
    tokenName: token.name,
    tokenSymbol: token.symbol,
    tokenAddress: token.address,
    tokenDecimals: token.decimals,
    tokenBalance: 0,
    tokenLogoURI: token.logoURI != "" ? token.logoURI : ""
  });
  localStorage.setItem("TokenCache" + nodeDetails.CHAIN_ID + "_" + addressIndex, JSON.stringify(currentTokensList));
}

/***/ }),

/***/ 8963:
/*!******************************************!*\
  !*** ./src/metro_backend/walletState.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletState": () => (/* binding */ WalletState)
/* harmony export */ });
/* harmony import */ var _Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var avalanche__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! avalanche */ 45493);
/* harmony import */ var avalanche__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(avalanche__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bip39 */ 61213);
/* harmony import */ var ethereumjs_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethereumjs-wallet */ 49158);
/* harmony import */ var ethereumjs_wallet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_wallet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bignumber.js */ 84098);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _txHistory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./txHistory */ 64469);
/* harmony import */ var metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! metro_scripts/src/api/metroRPC */ 62402);
/* harmony import */ var _IWalletInterfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IWalletInterfaces */ 99232);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ 5381);









/* --- Note # xdjtx # we are one @
    walletState.ts contains interfaces & classes that contain important information about the wallet.
    This entire file is just a hacky "implementation", will be polished and finessed later, most of the
    shit here will be changed entirely and swapped out for WASM...
*/
//const tools = BinTools.getInstance();
//Much like I mentioned in the note above, this entire thing is a temporary solution. Will likely create some sort of singleton
//and split this file into more classes n things, read the docs/roadmap...
//class WalletState contains information about the wallet state, and allows for sending/signing/getting info.

class WalletState {
  constructor(mnemonicPhrase) {
    var _a, _b; //Basic node details default to test network


    this.nodeDetails = {
      IP: 'dijets.uksouth.cloudapp.azure.com',
      PORT: 443,
      NETWORK_ID: 12345,
      CHAIN_ID: 43112,
      PROTOCOL: 'https'
    };
    this.djtxAmountAtto = new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber("0");
    this.djtxAmountWhole = "Loading...";
    this.djtxAmountWholePrecise = '';
    this.isSearchingTokens = false; //Are we currently searching if the address has tokens in the token list?

    this.tokensCache = {
      hasSearchedAllTokens: false,
      tokenVault: {
        address: "",
        tokens: []
      }
    };
    this.walletSettings = {
      currentAccountIndex: 0,
      highestAccountIndex: 0,
      walletType: _IWalletInterfaces__WEBPACK_IMPORTED_MODULE_7__.WalletTypes.Phrase
    }; //wallet = this.hdWallet.derivePath(this.derivation_path + 0).getWallet();

    this.walletData = {
      networkID: 1,
      accounts: []
    };
    this.avalanche = new avalanche__WEBPACK_IMPORTED_MODULE_1__.Avalanche(this.nodeDetails.IP, this.nodeDetails.PORT, this.nodeDetails.PROTOCOL, this.nodeDetails.NETWORK_ID);

    if (localStorage.getItem("NetworkSettings")) {
      this.nodeDetails = JSON.parse(localStorage.getItem("NetworkSettings") || "{}");
    } else {
      localStorage.setItem("NetworkSettings", JSON.stringify(this.nodeDetails));
    }

    if (localStorage.getItem("WalletSettings") != null) {
      this.walletSettings = JSON.parse(localStorage.getItem("WalletSettings") || "{}");
    } else {
      this.walletSettings = {
        currentAccountIndex: 0,
        highestAccountIndex: 0,
        walletType: _IWalletInterfaces__WEBPACK_IMPORTED_MODULE_7__.WalletTypes.Phrase
      };
    }

    this.avalanche = new avalanche__WEBPACK_IMPORTED_MODULE_1__.Avalanche(this.nodeDetails.IP, this.nodeDetails.PORT, this.nodeDetails.PROTOCOL, this.nodeDetails.NETWORK_ID);
    localStorage.setItem("NetworkSettings", JSON.stringify(this.nodeDetails));
    let phrase = mnemonicPhrase == null ? (0,bip39__WEBPACK_IMPORTED_MODULE_2__.generateMnemonic)(256) : mnemonicPhrase;
    this.hdManager = ethereumjs_wallet__WEBPACK_IMPORTED_MODULE_3__.hdkey.fromMasterSeed((0,bip39__WEBPACK_IMPORTED_MODULE_2__.mnemonicToSeedSync)(phrase));

    for (let i = 0; i <= this.walletSettings.highestAccountIndex; i++) {
      let tmpWallet = this.hdManager.derivePath("m/44'/60'/0'/0/" + i).getWallet();
      this.walletData.accounts.push(new _IWalletInterfaces__WEBPACK_IMPORTED_MODULE_7__.Account(avalanche__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(tmpWallet.getPrivateKey()), i));
    }

    this.currentWallet = this.walletData.accounts[this.walletSettings.currentAccountIndex];
    this.cChain = this.avalanche.CChain(); //localStorage.removeItem("TokenCache");  //debug purposes...

    if (localStorage.getItem("TokenCache" + this.nodeDetails.CHAIN_ID + "_" + this.currentWallet.index) != null) {
      this.tokensCache = JSON.parse(localStorage.getItem("TokenCache" + this.nodeDetails.CHAIN_ID + "_" + this.currentWallet.index) || "{}");

      if (this.tokensCache.hasSearchedAllTokens == true && this.tokensCache.tokenVault.tokens.length > 0) {
        this.updateCurrentTokens();
      } else if (this.tokensCache.hasSearchedAllTokens == false) {
        this.isSearchingTokens = true;
        this.updateAllTokens();
      }
    } else {
      this.isSearchingTokens = true;
      this.updateAllTokens();
    }

    if (localStorage.getItem("TransactionHistory" + this.nodeDetails.CHAIN_ID + "_" + this.currentWallet.index)) {
      this.txHistory = JSON.parse(localStorage.getItem("TransactionHistory" + this.nodeDetails.CHAIN_ID + "_" + this.currentWallet.index) || '{}');
    } else {
      this.txHistory = {
        history: {
          accountIndex: this.currentWallet.index,
          transactions: []
        }
      };
      localStorage.setItem("TransactionHistory" + this.nodeDetails.CHAIN_ID + "_" + this.currentWallet.index, JSON.stringify(this.txHistory));
    }

    navigator.serviceWorker.onmessage = event => {
      var _a;

      if (event.data) {
        if (event.data.method == metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_6__.MetroRPC.GET_SUCCESFUL_TRANSACTIONS) {
          let newTx = event.data.data.txs;
          let newHistory = this.txHistory;

          for (let i = 0; i < newTx.length; i++) {
            newHistory.history.transactions.unshift(newTx[i]);
          }

          this.txHistory = newHistory;
          localStorage.setItem("TransactionHistory" + this.nodeDetails.CHAIN_ID + "_" + this.currentWallet.index, JSON.stringify(newHistory));
          (_a = navigator.serviceWorker.controller) === null || _a === void 0 ? void 0 : _a.postMessage({
            method: metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_6__.MetroRPC.CLEAR_PENDING_TRANSACTIONS
          });
        }
      }
    };

    (_a = navigator.serviceWorker.controller) === null || _a === void 0 ? void 0 : _a.postMessage({
      method: metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_6__.MetroRPC.GET_SUCCESFUL_TRANSACTIONS
    });
    (_b = navigator.serviceWorker.controller) === null || _b === void 0 ? void 0 : _b.postMessage({
      method: metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_6__.MetroRPC.SET_NODE_URI,
      uri: this.nodeDetails.PROTOCOL + "://" + this.nodeDetails.IP + ":" + this.nodeDetails.PORT + "/ext/bc/C/rpc"
    });
    this.updateAllTokensRec();
  } //Updates all added tokens every 5 seconds. TODO: move this to use the hard_working_metro_worker.js service-worker.
  //This is temporary.


  updateAllTokensRec() {
    var _this = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      setInterval( /*#__PURE__*/(0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        let currentTokensList = JSON.parse(localStorage.getItem("TokenCache" + _this.nodeDetails.CHAIN_ID + "_" + _this.currentWallet.index) || "{}");

        _this.updateDjtxBalance();

        for (let i = 0; i < currentTokensList.tokenVault.tokens.length; i++) {
          let tx = {
            /*getBalance()*/

            /*Padding*/

            /*Address we want the balance of*/
            "data": "0x70a08231" + "000000000000000000000000" + _this.getCurrentAddress().slice(2),
            "to": currentTokensList.tokenVault.tokens[i].tokenAddress
          };
          let response = yield _this.cChain.callMethod("eth_call", [tx, "latest"], "ext/bc/C/rpc").then(response => {
            return response;
          }).catch(error => {
            i++;
            console.error("uwu: " + error);
            return error;
          });
          let divNum = new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber(10).pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber(Number(currentTokensList.tokenVault.tokens[i].tokenDecimals))).precision(6);
          let amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber(String(response.data['result'])).div(divNum).precision(6).toNumber(); //Add a token to the cache only if the balance is more than 0.

          currentTokensList.tokenVault.tokens[i].tokenBalance = amount;
          localStorage.setItem("TokenCache" + _this.nodeDetails.CHAIN_ID + "_" + _this.currentWallet.index, JSON.stringify(currentTokensList));
        }

        _this.tokensCache = JSON.parse(localStorage.getItem("TokenCache" + _this.nodeDetails.CHAIN_ID + "_" + _this.currentWallet.index) || "{}");
      }), 3000);
    })();
  } //Checks balance of the Current tokens that the wallet already has an amount (> 0) of.


  updateCurrentTokens() {
    var _this2 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Updating balance of current tokens.");
      let currentTokensList = JSON.parse(localStorage.getItem("TokenCache" + _this2.nodeDetails.CHAIN_ID + "_" + _this2.currentWallet.index) || "{}");
      let i = 0;

      let getTokenBalance = /*#__PURE__*/function () {
        var _ref2 = (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          setTimeout( /*#__PURE__*/(0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            //An eth_call that calls the getBalance in ERC20 contracts.
            let tx = {
              /*getBalance()*/

              /*Padding*/

              /*Address we want the balance of*/
              "data": "0x70a08231" + "000000000000000000000000" + _this2.getCurrentAddress().slice(2),
              "to": currentTokensList.tokenVault.tokens[i].tokenAddress
            };
            let response = yield _this2.cChain.callMethod("eth_call", [tx, "latest"], "ext/bc/C/rpc").then(response => {
              return response;
            }).catch(error => {
              i++;
              console.log("fking uwu: " + error);
              getTokenBalance();
              return {
                "data": error
              };
            });
            let divNum = new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber(10).pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber(Number(currentTokensList.tokenVault.tokens[i].tokenDecimals))).precision(6); //console.log(new BigNumber(String(response.data['result'])).div(divNum).precision(6)
            // + " amount in " + tokenList.tokens[i].name);

            let amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber(String(response.data['result'])).div(divNum).precision(6).toNumber(); //Add a token to the cache only if the balance is more than 0.

            currentTokensList.tokenVault.tokens[i].tokenBalance = amount;
            console.log("Updating Token: " + currentTokensList.tokenVault.tokens[i].tokenName + " to " + currentTokensList.tokenVault.tokens[i].tokenBalance);
            localStorage.setItem("TokenCache" + _this2.nodeDetails.CHAIN_ID + "_" + _this2.currentWallet.index, JSON.stringify(currentTokensList));
            i++;

            if (i < currentTokensList.tokenVault.tokens.length) {
              getTokenBalance();
            }
          }), 100);
        });

        return function getTokenBalance() {
          return _ref2.apply(this, arguments);
        };
      }();

      if (i < currentTokensList.tokenVault.tokens.length) {
        getTokenBalance();
      }
    })();
  } //Checks balance of the current address with the Metro Token list & manually added tokens.


  updateAllTokens() {
    var _this3 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Starting token list search...");

      let tokenList = __webpack_require__(/*! ../MetroTokenList.json */ 75732);

      _this3.tokensCache = {
        hasSearchedAllTokens: false,
        tokenVault: {
          address: _this3.getCurrentAddress(),
          tokens: []
        }
      };
      let i = 0;

      let getTokenBalance = /*#__PURE__*/function () {
        var _ref4 = (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          setTimeout( /*#__PURE__*/(0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            var _a; //An eth_call that calls the getBalance in ERC20 contracts.


            let tx = {
              /*getBalance()*/

              /*Padding*/

              /*Address we want the balance of*/
              "data": "0x70a08231" + "000000000000000000000000" + _this3.getCurrentAddress().slice(2),
              "to": tokenList.tokens[i].address
            };
            let response = yield _this3.cChain.callMethod("eth_call", [tx, "latest"], "ext/bc/C/rpc").then(response => {
              return response;
            }).catch(error => {
              i++;
              console.log("an error has occurred: " + error);
              return {
                "data": error
              };
            });
            let divNum = new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber(10).pow(new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber(Number(tokenList.tokens[i].decimals))).precision(6); //console.log(new BigNumber(String(response.data['result'])).div(divNum).precision(6)
            // + " amount in " + tokenList.tokens[i].name);

            let amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber(String(response.data['result'])).div(divNum).precision(6).toNumber(); //Add a token to the cache only if the balance is more than 0.

            if (amount > 0.0) {
              (_a = _this3.tokensCache) === null || _a === void 0 ? void 0 : _a.tokenVault.tokens.push({
                tokenName: tokenList.tokens[i].name,
                tokenAddress: tokenList.tokens[i].address,
                tokenBalance: amount,
                tokenDecimals: tokenList.tokens[i].decimals,
                tokenSymbol: tokenList.tokens[i].symbol,
                tokenLogoURI: tokenList.tokens[i].logoURI
              });
              console.log("Discovered token from Metro token list + User Defined Tokens: " + tokenList.tokens[i].name);
            }

            localStorage.setItem("TokenCache" + _this3.nodeDetails.CHAIN_ID + "_" + _this3.currentWallet.index, JSON.stringify(_this3.tokensCache));
            console.log("Searched for: " + tokenList.tokens[i].name);
            i++;

            if (i < tokenList.tokens.length) {
              getTokenBalance();
            } else {
              _this3.tokensCache.hasSearchedAllTokens = true;
              localStorage.setItem("TokenCache" + _this3.nodeDetails.CHAIN_ID + "_" + _this3.currentWallet.index, JSON.stringify(_this3.tokensCache));
              _this3.isSearchingTokens = false;
            }
          }), 100);
        });

        return function getTokenBalance() {
          return _ref4.apply(this, arguments);
        };
      }();

      getTokenBalance();
    })();
  } //Returns the current address the wallet is focused at.    


  getCurrentAddress() {
    //Replace the current account with this latest actual current account...
    return this.currentWallet.wallet.address;
  } //Gets the latest Djtx balance.


  updateDjtxBalance() {
    var _this4 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let v = yield _this4.cChain.callMethod("eth_getBalance", [_this4.currentWallet.wallet.address, "latest"], "ext/bc/C/rpc");
      _this4.djtxAmountAtto = new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber(String(v.data['result']));
      _this4.djtxAmountWhole = String(_this4.djtxAmountAtto.div(new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber("1000000000000000000")).toNumber().toPrecision(5));
      _this4.djtxAmountWholePrecise = String(_this4.djtxAmountAtto.div(new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber("1000000000000000000")).toNumber().toPrecision(18));
    })();
  }

  updateChainID(chainID) {
    var _a;

    switch (chainID) {
      case 43113:
        {
          this.nodeDetails.CHAIN_ID = 43113;
          this.nodeDetails.IP = "api.djtx-test.network";
          break;
        }

      case 43112:
        {
          this.nodeDetails.CHAIN_ID = 43112;
          this.nodeDetails.IP = "dijets.uksouth.cloudapp.azure.com";
          break;
        }

      default:
        {
          this.nodeDetails.CHAIN_ID = 43112;
          this.nodeDetails.IP = "dijets.uksouth.cloudapp.azure.com";
          console.error("Custom Chain IDs are coming in the near future! Resolving to main-net...");
        }
    }

    this.avalanche = new avalanche__WEBPACK_IMPORTED_MODULE_1__.Avalanche(this.nodeDetails.IP, this.nodeDetails.PORT, this.nodeDetails.PROTOCOL, this.nodeDetails.NETWORK_ID);
    this.cChain = this.avalanche.CChain();
    localStorage.setItem("NetworkSettings", JSON.stringify(this.nodeDetails));

    if (localStorage.getItem("TransactionHistory" + this.nodeDetails.CHAIN_ID + "_" + this.currentWallet.index)) {
      this.txHistory = JSON.parse(localStorage.getItem("TransactionHistory" + this.nodeDetails.CHAIN_ID + "_" + this.currentWallet.index) || '{}');
    } else {
      this.txHistory = {
        history: {
          accountIndex: this.currentWallet.index,
          transactions: []
        }
      };
      localStorage.setItem("TransactionHistory" + this.nodeDetails.CHAIN_ID + "_" + this.currentWallet.index, JSON.stringify(this.txHistory));
    }

    (_a = navigator.serviceWorker.controller) === null || _a === void 0 ? void 0 : _a.postMessage({
      method: metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_6__.MetroRPC.SET_NODE_URI,
      uri: this.nodeDetails.PROTOCOL + "://" + this.nodeDetails.IP + ":" + this.nodeDetails.PORT + "/ext/bc/C/rpc"
    });
  }

  changeAccount(accountIndex) {
    var _a, _b;

    if (accountIndex >= this.walletData.accounts.length) {
      let tmpWallet = this.hdManager.derivePath("m/44'/60'/0'/0/" + accountIndex).getWallet();
      this.walletData.accounts.push(new _IWalletInterfaces__WEBPACK_IMPORTED_MODULE_7__.Account(avalanche__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(tmpWallet.getPrivateKey()), accountIndex));
      this.walletSettings.highestAccountIndex = accountIndex;
    }

    this.walletSettings.currentAccountIndex = accountIndex;
    localStorage.setItem("WalletSettings", JSON.stringify(this.walletSettings));
    this.currentWallet = this.walletData.accounts[accountIndex];

    if (localStorage.getItem("TokenCache" + this.nodeDetails.CHAIN_ID + "_" + this.currentWallet.index) != null) {
      this.tokensCache = JSON.parse(localStorage.getItem("TokenCache" + this.nodeDetails.CHAIN_ID + "_" + this.currentWallet.index) || "{}");

      if (this.tokensCache.hasSearchedAllTokens == true && this.tokensCache.tokenVault.tokens.length > 0) {
        this.updateCurrentTokens();
      } else if (this.tokensCache.hasSearchedAllTokens == false) {
        this.isSearchingTokens = true;
        this.updateAllTokens();
      }
    } else {
      this.isSearchingTokens = true;
      this.updateAllTokens();
    }

    (_a = navigator.serviceWorker.controller) === null || _a === void 0 ? void 0 : _a.postMessage({
      method: metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_6__.MetroRPC.CHANGE_ACCOUNTS,
      accounts: [this.currentWallet.wallet.address]
    });
    (_b = navigator.serviceWorker.controller) === null || _b === void 0 ? void 0 : _b.postMessage({
      method: metro_scripts_src_api_metroRPC__WEBPACK_IMPORTED_MODULE_6__.MetroRPC.SET_NODE_URI,
      uri: this.nodeDetails.PROTOCOL + "://" + this.nodeDetails.IP + ":" + this.nodeDetails.PORT + "/ext/bc/C/rpc"
    });
  }

  resetTxHistory() {
    this.txHistory = {
      history: {
        accountIndex: this.currentWallet.index,
        transactions: []
      }
    };
    localStorage.setItem("TransactionHistory" + this.nodeDetails.CHAIN_ID + "_" + this.currentWallet.index, JSON.stringify(this.txHistory));
  }
  /* --- A bunch of contract/ethRPC Methods, will move this out to a seperate API later... ---*/


  getNonce() {
    var _this5 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.cChain.callMethod("eth_getTransactionCount", [_this5.getCurrentAddress(), "latest"], "ext/bc/C/rpc");
    })();
  }

  estimateGasLimit(txObject) {
    var _this6 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.cChain.callMethod("eth_estimateGas", [txObject], "ext/bc/C/rpc");
    })();
  }

  getPriorityGasPrice() {
    var _this7 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.cChain.callMethod("eth_maxPriorityFeePerGas", [], "ext/bc/C/rpc");
    })();
  }

  getBaseFeePrice() {
    var _this8 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.cChain.callMethod("eth_baseFee", [], "ext/bc/C/rpc");
    })();
  }

  signTransaction(unsignedTx) {
    var _this9 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.currentWallet.wallet.signTransaction(unsignedTx);
    })();
  }

  issueRawTransaction(signedTxPayload) {
    var _this10 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this10.cChain.callMethod("eth_sendRawTransaction", [signedTxPayload], "ext/bc/C/rpc");
    })();
  }
  /**Sends a transaction automatically with the given parameters, returns the tx hash...
   * (eth-call result)
   *
   */


  sendTx(recipentAddress, amount, maxFee, priorityGasFee, gasLimit, token) {
    var _this11 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let tx;
      let terx;
      const today = new Date();
      let dateString = today.getFullYear().toString() + " / " + (today.getMonth() + 1).toString() + " / " + today.getDate().toString() + " / " + today.getHours().toString() + ":" + today.getMinutes().toString().padStart(2, '0');

      if (token == null) {
        //Normal DJTX transfer
        tx = {
          chainId: _this11.nodeDetails.CHAIN_ID,
          to: recipentAddress,
          from: _this11.getCurrentAddress(),
          value: Number(amount) > 0 ? '0x' + new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber(amount).times("1000000000000000000").toString(16) : '0x',
          nonce: (yield _this11.getNonce()).data.result,
          gasLimit: gasLimit,
          maxPriorityFeePerGas: priorityGasFee,
          maxFeePerGas: maxFee,
          type: 2
        };
        terx = {
          txType: "SEND ASSET",
          txHash: "",
          txAmount: amount,
          assetName: "DJTX",
          assetSymbol: "DJTX",
          transactionDate: dateString,
          recipentAddress: recipentAddress,
          transactionState: _txHistory__WEBPACK_IMPORTED_MODULE_5__.TransactionStates.PENDING
        };
      } else {
        //Transfer ERC20 token
        //I know, very computationally heavy way of doing this, idc for now, most of the code is temporary...
        let tokenDecimals = parseInt((yield (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getTokenDecimals)(token.tokenAddress)).data.result, 16);
        let amountToSend = new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber(amount).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber('10').pow(tokenDecimals)).toString(16).padStart(64, '0');
        /*transfer()*/

        /* Padding */

        /* Address */

        let data = '0xa9059cbb' + '000000000000000000000000' + recipentAddress.slice(2) + amountToSend;
        tx = {
          chainId: _this11.nodeDetails.CHAIN_ID,
          to: token.tokenAddress,
          from: _this11.getCurrentAddress(),
          nonce: (yield _this11.getNonce()).data.result,
          data: data,
          gasLimit: gasLimit,
          maxFeePerGas: maxFee,
          maxPriorityFeePerGas: priorityGasFee,
          type: 2
        };
        terx = {
          txType: "SEND ASSET",
          txHash: "",
          txAmount: amount,
          assetName: token.tokenName,
          assetSymbol: token.tokenSymbol,
          transactionDate: dateString,
          recipentAddress: recipentAddress,
          transactionState: _txHistory__WEBPACK_IMPORTED_MODULE_5__.TransactionStates.PENDING
        };
      }

      let signedTx = yield _this11.signTransaction(tx);

      let res = _this11.cChain.callMethod("eth_sendRawTransaction", [signedTx], "ext/bc/C/rpc");

      res.then(response => {
        terx.txHash = response.data.result;
        (0,_txHistory__WEBPACK_IMPORTED_MODULE_5__.addNewTransaction)(terx);
      });
      return res; //return this.cChain.callMethod("eth_sendRawTransaction", [signedTx], "ext/bc/C/rpc");
    })();
  }
  /**
  * Returns a promise containing: Unsigned tx as well as recommended gas costs
  * @param address The address to send to
  * @param token Optionally an ERC20 token transfer, keep as null if just a normal transfer.
  */


  getGasEstimates(recipentAddress, amount, token) {
    var _this12 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let tx;

      if (token == null) {
        //Normal DJTX transfer
        tx = {
          //chainId: 43113,
          to: recipentAddress,
          from: _this12.getCurrentAddress(),
          value: Number(amount) > 0 ? '0x' + new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber(amount).times("1000000000000000000").toString(16) : '0x',
          nonce: (yield _this12.getNonce()).data.result,
          data: '0x'
        };
      } else {
        //Transfer ERC20 token
        //I know, very computationally heavy way of doing this, idc for now, most of the code is temporary...
        let tokenDecimals = parseInt((yield (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getTokenDecimals)(token.tokenAddress)).data.result, 16);
        let amountToSend = new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber(amount).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_4__.BigNumber('10').pow(tokenDecimals)).toString(16).padStart(64, '0');
        /*transfer()*/

        /* Padding */

        /* Address */

        let data = '0xa9059cbb' + '000000000000000000000000' + recipentAddress.slice(2) + amountToSend;
        tx = {
          //chainId: 43113,
          to: token.tokenAddress,
          from: _this12.getCurrentAddress(),
          nonce: (yield _this12.getNonce()).data.result,
          data: data
        };
      }

      return {
        gasLimit: (yield _this12.estimateGasLimit(tx)).data.result,
        baseFee: (yield _this12.getBaseFeePrice()).data.result,
        priorityFee: (yield _this12.getPriorityGasPrice()).data.result
      };
    })();
  }
  /**
  * Returns gas estimates for a raw transaction.
  * @param rawTxData Non-RLP encoded unsigned transaction.
  */


  getGasEstimateRaw(rawTxData) {
    var _this13 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return {
        gasLimit: (yield _this13.estimateGasLimit(rawTxData)).data.result,
        baseFee: (yield _this13.getBaseFeePrice()).data.result,
        priorityFee: (yield _this13.getPriorityGasPrice()).data.result
      };
    })();
  }

  openTxInExplorer(txHash) {
    var _this14 = this;

    return (0,_Users_saleemfareed_Downloads_dijets_extension_decypher_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b;

      if (_this14.nodeDetails.CHAIN_ID == 43113) {
        (_a = window.open('https://testnet.snowtrace.io/tx/' + txHash, '_blank')) === null || _a === void 0 ? void 0 : _a.focus();
      } else if (_this14.nodeDetails.CHAIN_ID == 43112) {
        (_b = window.open('https://snowtrace.io/tx/' + txHash, '_blank')) === null || _b === void 0 ? void 0 : _b.focus();
      }
    })();
  }

  deleteWallet() {
    for (let i = 0; i < this.walletData.accounts.length; i++) {
      localStorage.removeItem("TokenCache" + this.nodeDetails.CHAIN_ID + "_" + this.currentWallet.index);
      localStorage.removeItem("TransactionHistory" + this.nodeDetails.CHAIN_ID + "_" + this.currentWallet.index);
      localStorage.removeItem("NetworkSettings");
      localStorage.removeItem("WalletSettings");
      localStorage.removeItem("Vault");
    }
  }

}

/***/ }),

/***/ 52361:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 94616:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 75732:
/*!*********************************!*\
  !*** ./src/MetroTokenList.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"Metro Token List","logoURI":"https://data.kayowo.net/xdjtx_resources/art/icons/xdjtx_logo_1000x1000.png","keywords":["avalanche","defi","metro","xdjtx"],"version":{"major":1,"minor":0,"patch":0},"timestamp":"2021-12-04 18:44:55","tokens":[{"address":"0x60781C2586D68229fde47564546784ab3fACA982","chainId":43114,"name":"Pangolin","symbol":"PNG","decimals":18,"logoURI":"https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x60781C2586D68229fde47564546784ab3fACA982/logo.png"},{"address":"0x78ea17559B3D2CF85a7F9C2C704eda119Db5E6dE","chainId":43114,"name":"Avaware","symbol":"AVE","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x78ea17559B3D2CF85a7F9C2C704eda119Db5E6dE/logo.png"},{"address":"0xdb333724fAE72b4253FC3d44c8270CBBC86d147b","chainId":43114,"name":"Cabbage.Cash","symbol":"CABAG","decimals":18,"logoURI":"https://raw.githubusercontent.com/qualitycabbage/token/main/logo.png"},{"chainId":43114,"address":"0x3711c397B6c8F7173391361e27e67d72F252cAad","decimals":18,"name":"COMPLUS","symbol":"COM","logoURI":"https://raw.githubusercontent.com/complusnetwork/default-token-list/master/src/ava/0x3711c397B6c8F7173391361e27e67d72F252cAad/logo.png"},{"chainId":43114,"address":"0x488F73cddDA1DE3664775fFd91623637383D6404","decimals":18,"name":"YetiSwap","symbol":"YTS","logoURI":"https://raw.githubusercontent.com/YetiSwap/yetiswap.app/master/src/assets/image/YTSCoin.png"},{"chainId":43114,"address":"0x008E26068B3EB40B443d3Ea88c1fF99B789c10F7","decimals":18,"name":"Zero.Exchange Token","symbol":"ZERO"},{"chainId":43114,"address":"0xCa7730D239f9fCA6d9683B0a62ed1A6c660D7CbA","decimals":18,"name":"Freebitcoins","symbol":"FREE","logoURI":"https://raw.githubusercontent.com/FreeBitcoins-com/tokens/main/assets/0xCa7730D239f9fCA6d9683B0a62ed1A6c660D7CbA/logo.png"},{"chainId":43114,"address":"0xC38f41A296A4493Ff429F1238e030924A1542e50","decimals":18,"name":"Snowball","symbol":"SNOB","logoURI":"https://raw.githubusercontent.com/Snowball-Finance/Assets/main/Uphill%20snowball.png"},{"chainId":43114,"address":"0x1F1FE1eF06ab30a791d6357FdF0a7361B39b1537","decimals":9,"name":"sled.finance","symbol":"SFI","logoURI":"https://raw.githubusercontent.com/sled-finance/media/main/sled_token_fl.png"},{"chainId":43114,"address":"0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985","decimals":9,"name":"Spore","symbol":"SPORE","logoURI":"https://raw.githubusercontent.com/sporeproject/Spore-frontend/master/src/utils/SPORE.png"},{"chainId":43114,"address":"0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c","decimals":18,"name":"Penguin Finance","symbol":"PEFI","logoURI":"https://raw.githubusercontent.com/Penguin-Finance/png-files/main/pefiv2_250x250.png"},{"address":"0xf925F63445F01A53A441C0b6b1D9580C60551860","chainId":43114,"name":"Crypto Fren","symbol":"FREN","decimals":18,"logoURI":"https://ibb.co/bNjv8Hk"},{"address":"0xC931f61B1534EB21D8c11B24f3f5Ab2471d4aB50","chainId":43114,"name":"Blocknet","symbol":"aaBLOCK","decimals":8,"logoURI":"https://github.com/blocknetdx/documentation/blob/master/docs/img/icons/Blocknet_symbol_dark_RGB.png"},{"chainId":43114,"address":"0x4C9B4E1AC6F24CdE3660D5E4Ef1eBF77C710C084","decimals":18,"name":"Lydia Finance","symbol":"LYD","logoURI":"https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x4C9B4E1AC6F24CdE3660D5E4Ef1eBF77C710C084/logo.png"},{"chainId":43114,"address":"0x846D50248BAf8b7ceAA9d9B53BFd12d7D7FBB25a","decimals":18,"name":"Verso","symbol":"VSO","logoURI":"https://raw.githubusercontent.com/VersoOfficial/pr/master/icon_blue.png"},{"chainId":43114,"address":"0x1ECd47FF4d9598f89721A2866BFEb99505a413Ed","decimals":18,"name":"AV Me","symbol":"AVME","logoURI":"https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x1ECd47FF4d9598f89721A2866BFEb99505a413Ed/logo.png"},{"chainId":43114,"address":"0xE9D00cBC5f02614d7281D742E6E815A47ce31107","decimals":9,"name":"Crack.Fi","symbol":"CRACK","logoURI":"https://raw.githubusercontent.com/crackfi/logo/master/crackfi_png.png"},{"chainId":43114,"address":"0x65378b697853568dA9ff8EaB60C13E1Ee9f4a654","decimals":18,"name":"Husky Avalanche","symbol":"HUSKY","logoURI":"https://raw.githubusercontent.com/safepoint-be/project-husky/main/img/logo.png"},{"chainId":43114,"address":"0xD606199557c8Ab6F4Cc70bD03FaCc96ca576f142","decimals":18,"name":"Gondola","symbol":"GDL","logoURI":"https://raw.githubusercontent.com/gondola-finance/frontend-v2/master/src/assets/icons/colour.png"},{"chainId":43114,"address":"0x81440C939f2C1E34fc7048E518a637205A632a74","decimals":18,"name":"Cycle Protocol","symbol":"CYCLE","logoURI":"https://raw.githubusercontent.com/CycleProtocol/assets/master/cycle-logo-round-small.png"},{"chainId":43114,"address":"0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4","decimals":18,"name":"Avalaunch","symbol":"XAVA","logoURI":"https://raw.githubusercontent.com/avalaunch-app/xava-protocol/master/logo.png"},{"chainId":43114,"address":"0x8349088C575cA45f5A63947FEAeaEcC41136fA01","decimals":9,"name":"TeslaBitcoin","symbol":"TESLABTC","logoURI":"https://raw.githubusercontent.com/crackfi/tesla_btc_logo/master/Tesla_Bitcoin_logo.png"},{"chainId":43114,"address":"0x4aBBc3275f8419685657C2DD69b8ca2e26F23F8E","decimals":9,"name":"diamondtoken.world","symbol":"Diamond","logoURI":"https://raw.githubusercontent.com/virtualdiamondtoken/site/main/logo.png"},{"chainId":43114,"address":"0x76076880e1EBBcE597e6E15c47386cd34de4930F","decimals":18,"name":"Canopus","symbol":"OPUS","logoURI":"https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x76076880e1EBBcE597e6E15c47386cd34de4930F/logo.png"},{"chainId":43114,"address":"0x8D88e48465F30Acfb8daC0b3E35c9D6D7d36abaf","decimals":18,"name":"Canary","symbol":"CNR","logoURI":"https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x8D88e48465F30Acfb8daC0b3E35c9D6D7d36abaf/logo.png"},{"chainId":43114,"address":"0xa5E59761eBD4436fa4d20E1A27cBa29FB2471Fc6","decimals":18,"name":"Sherpa","symbol":"SHERPA","logoURI":"https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xa5E59761eBD4436fa4d20E1A27cBa29FB2471Fc6/logo.png"},{"chainId":43114,"address":"0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17","decimals":18,"name":"DeFi Yield Protocol","symbol":"DYP","logoURI":"https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17/logo.png"},{"chainId":43114,"address":"0xd6070ae98b8069de6B494332d1A1a81B6179D960","decimals":18,"name":"Beefy Finance","symbol":"BIFI","logoURI":"https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xd6070ae98b8069de6B494332d1A1a81B6179D960/logo.png"},{"chainId":43114,"address":"0x264c1383EA520f73dd837F915ef3a732e204a493","decimals":18,"name":"Binance","symbol":"BNB","logoURI":"https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x264c1383EA520f73dd837F915ef3a732e204a493/logo.png"},{"chainId":43114,"address":"0xB1466d4cf0DCfC0bCdDcf3500F473cdACb88b56D","decimals":18,"name":"Weble Ecosystem Token","symbol":"WET","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xB1466d4cf0DCfC0bCdDcf3500F473cdACb88b56D/logo.png"},{"chainId":43114,"address":"0x59414b3089ce2AF0010e7523Dea7E2b35d776ec7","decimals":18,"name":"Yield Yak","symbol":"YAK","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x59414b3089ce2AF0010e7523Dea7E2b35d776ec7/logo.png"},{"chainId":43114,"address":"0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5","decimals":18,"name":"BENQI","symbol":"QI","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5/logo.png"},{"chainId":43114,"address":"0x9E037dE681CaFA6E661e6108eD9c2bd1AA567Ecd","decimals":18,"name":"AllianceBlock Token","symbol":"WALBT","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x9E037dE681CaFA6E661e6108eD9c2bd1AA567Ecd/logo.png"},{"chainId":43114,"address":"0x21c5402C3B7d40C89Cc472C9dF5dD7E51BbAb1b1","decimals":18,"name":"Tundra Token","symbol":"TUNDRA","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x21c5402C3B7d40C89Cc472C9dF5dD7E51BbAb1b1/logo.png"},{"address":"0x595c8481c48894771CE8FaDE54ac6Bf59093F9E8","chainId":43114,"name":"Gaj Finance","symbol":"GAJ","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x595c8481c48894771CE8FaDE54ac6Bf59093F9E8/logo.png"},{"address":"0x094bd7B2D99711A1486FB94d4395801C6d0fdDcC","chainId":43114,"name":"Teddy Cash Token","symbol":"TEDDY","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x094bd7B2D99711A1486FB94d4395801C6d0fdDcC/logo.png"},{"address":"0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd","chainId":43114,"name":"Joe Token","symbol":"JOE","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd/logo.png"},{"address":"0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C","chainId":43114,"name":"Elk","symbol":"ELK","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C/logo.png"},{"address":"0x9Fda7cEeC4c18008096C2fE2B85F05dc300F94d0","chainId":43114,"name":"MarginSwap","symbol":"MFI","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x9Fda7cEeC4c18008096C2fE2B85F05dc300F94d0/logo.png"},{"address":"0xAcD7B3D9c10e97d0efA418903C0c7669E702E4C0","chainId":43114,"name":"Eleven.finance","symbol":"ELE","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xAcD7B3D9c10e97d0efA418903C0c7669E702E4C0/logo.png"},{"address":"0x440aBbf18c54b2782A4917b80a1746d3A2c2Cce1","chainId":43114,"name":"SHIBDJTX","symbol":"SHIBX","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x440aBbf18c54b2782A4917b80a1746d3A2c2Cce1/logo.png"},{"address":"0x9eF758aC000a354479e538B8b2f01b917b8e89e7","chainId":43114,"name":"xDollar","symbol":"XDO","decimals":18,"logoURI":"https://raw.githubusercontent.com/xDollar-Finance/logo/master/xdo-128x128.png"},{"address":"0xDd453dBD253fA4E5e745047d93667Ce9DA93bbCF","chainId":43114,"name":"ZABU","symbol":"ZABU","decimals":18,"logoURI":"https://raw.githubusercontent.com/zabufinance/Assets/main/Zabu300x300.png"},{"address":"0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454","chainId":43114,"name":"Frax Share - Anyswap","symbol":"FXS","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454/logo.png"},{"address":"0xF44Fb887334Fa17d2c5c0F970B5D320ab53eD557","chainId":43114,"name":"Starter","symbol":"START","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xF44Fb887334Fa17d2c5c0F970B5D320ab53eD557/logo.png"},{"address":"0xc7B5D72C836e718cDA8888eaf03707fAef675079","chainId":43114,"name":"TrustSwap Token","symbol":"SWAP.e","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xc7B5D72C836e718cDA8888eaf03707fAef675079/logo.png"},{"address":"0x62a4f3280C02C8Cc3E9ff984e4aaD94f8F7fEA26","chainId":43114,"name":"BABYPangolin","symbol":"BABYPangolin","decimals":9,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x62a4f3280C02C8Cc3E9ff984e4aaD94f8F7fEA26/logo.png"},{"address":"0xc12e249FaBe1c5Eb7C558E5F50D187687a244E31","chainId":43114,"name":"Blue Token","symbol":"BLUE","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xc12e249FaBe1c5Eb7C558E5F50D187687a244E31/logo.png"},{"address":"0x999c891262ce01f1C1AFD1D46260E4c1E508B243","chainId":43114,"name":"Give Token","symbol":"GIVE","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x999c891262ce01f1C1AFD1D46260E4c1E508B243/logo.png"},{"address":"0x6AFD5A1ea4b793CC1526d6Dc7e99A608b356eF7b","chainId":43114,"name":"STORM Token","symbol":"STORM","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x6AFD5A1ea4b793CC1526d6Dc7e99A608b356eF7b/logo.png"},{"chainId":43114,"address":"0xf57b80A574297892B64E9a6c997662889b04a73a","decimals":18,"name":"EXP Token","symbol":"EXP","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xf57b80A574297892B64E9a6c997662889b04a73a/logo.png"},{"chainId":43114,"address":"0x8A9B36393633aD77ceb8aebC7768815627B93557","decimals":18,"name":"SphereSwap Token","symbol":"SPHERE.e","logoURI":"https://raw.githubusercontent.com/SphereSwap/SphereSwapData/main/logo/logo.png"},{"chainId":43114,"address":"0x01C2086faCFD7aA38f69A6Bd8C91BEF3BB5adFCa","decimals":18,"name":"YAY Games","symbol":"YAY","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x01C2086faCFD7aA38f69A6Bd8C91BEF3BB5adFCa/logo.png"},{"chainId":43114,"address":"0x397bBd6A0E41bdF4C3F971731E180Db8Ad06eBc1","decimals":6,"name":"Djtxtars Token","symbol":"AVXT","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x397bBd6A0E41bdF4C3F971731E180Db8Ad06eBc1/logo.png"},{"chainId":43114,"address":"0xae9d2385Ff2E2951Dd4fA061e74c4d3deDD24347","decimals":8,"name":"TOK","symbol":"TOK","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xae9d2385Ff2E2951Dd4fA061e74c4d3deDD24347/logo.png"},{"chainId":43114,"address":"0xb54f16fB19478766A268F172C9480f8da1a7c9C3","decimals":9,"name":"Time","symbol":"TIME","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xb54f16fB19478766A268F172C9480f8da1a7c9C3/logo.png"},{"chainId":43114,"address":"0x90842eb834cFD2A1DB0b1512B254a18E4D396215","decimals":9,"name":"Good Bridging","symbol":"GB","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x90842eb834cFD2A1DB0b1512B254a18E4D396215/logo.png"},{"chainId":43114,"address":"0x0ebd9537A25f56713E34c45b38F421A1e7191469","decimals":18,"name":"OpenOcean","symbol":"OOE","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x0ebd9537A25f56713E34c45b38F421A1e7191469/logo.png"},{"chainId":43114,"address":"0x3709E8615E02C15B096f8a9B460ccb8cA8194e86","decimals":18,"name":"Vee Finance","symbol":"VEE","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x3709E8615E02C15B096f8a9B460ccb8cA8194e86/logo.png"},{"chainId":43114,"address":"0x938FE3788222A74924E062120E7BFac829c719Fb","decimals":18,"name":"Ape In","symbol":"APEIN","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x938FE3788222A74924E062120E7BFac829c719Fb/logo.png"},{"chainId":43114,"address":"0xbe6D6323eA233fD1DBe1fF66c5252170c69fb6c7","decimals":18,"name":"ZUBAX","symbol":"ZUBAX","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xbe6D6323eA233fD1DBe1fF66c5252170c69fb6c7/logo.png"},{"chainId":43114,"address":"0x69A61f38Df59CBB51962E69C54D39184E21C27Ec","decimals":18,"name":"Partyswap","symbol":"PARTY","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x69A61f38Df59CBB51962E69C54D39184E21C27Ec/logo.png"},{"chainId":43114,"address":"0xd039C9079ca7F2a87D632A9C0d7cEa0137bAcFB5","decimals":9,"name":"APE-X","symbol":"APE-X","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xd039C9079ca7F2a87D632A9C0d7cEa0137bAcFB5/logo.png"},{"chainId":43114,"address":"0xfC108f21931576a21D0b4b301935DAc80d9E5086","decimals":18,"name":"Iron Finance ICE","symbol":"IronICE","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xfC108f21931576a21D0b4b301935DAc80d9E5086/logo.png"},{"chainId":43114,"address":"0xdDAaAD7366B455AfF8E7c82940C43CEB5829B604","decimals":12,"name":"MiniYAK","symbol":"mYAK","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xdDAaAD7366B455AfF8E7c82940C43CEB5829B604/logo.png"},{"chainId":43114,"address":"0xA384Bc7Cdc0A93e686da9E7B8C0807cD040F4E0b","decimals":18,"name":"WOWSwap","symbol":"WOW","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xA384Bc7Cdc0A93e686da9E7B8C0807cD040F4E0b/logo.png"},{"chainId":43114,"address":"0xCE1bFFBD5374Dac86a2893119683F4911a2F7814","decimals":18,"name":"Spell Token","symbol":"SPELL","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xCE1bFFBD5374Dac86a2893119683F4911a2F7814/logo.png"},{"chainId":43114,"address":"0x70B907f3F7231bE122100dac51C1995e6804E346","decimals":6,"name":"True Reflect Token","symbol":"TRT","logoURI":"https://raw.githubusercontent.com/TrueReflect-Lead-Design/Logo/main/logo.png"},{"chainId":43114,"address":"0x8d4A8522f2FB040d4755757C05d99976C0D29fCE","decimals":9,"name":"Tjoma.Finance","symbol":"TJOMA","logoURI":"https://raw.githubusercontent.com/sled-finance/tjoma-media/master/logo.png"},{"chainId":43114,"address":"0xdE61d83F83950fDe967BD2C68B1a9f64694F85Ff","name":"JENKEM","symbol":"JENKEM","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xdE61d83F83950fDe967BD2C68B1a9f64694F85Ff/logo.png"},{"chainId":43114,"address":"0xBf9D7eCC6D5f09B9a10b8a39921E6f9cbA3c5D48","name":"ICEDOGE","symbol":"ICEDOGE","decimals":9,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xBf9D7eCC6D5f09B9a10b8a39921E6f9cbA3c5D48/logo.png"},{"chainId":43114,"address":"0xb27c8941a7Df8958A1778c0259f76D1F8B711C35","name":"Kalao Token","symbol":"KLO","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xb27c8941a7Df8958A1778c0259f76D1F8B711C35/logo.png"},{"chainId":43114,"address":"0xB147656604217a03Fe2c73c4838770DF8d9D21B8","name":"Blizzard","symbol":"BLIZZ","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xB147656604217a03Fe2c73c4838770DF8d9D21B8/logo.png"},{"chainId":43114,"address":"0x3ACa5545e76746A3Fe13eA66B24BC0eBcC51E6b4","name":"Everest Token","symbol":"EVRT","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x3ACa5545e76746A3Fe13eA66B24BC0eBcC51E6b4/logo.png"},{"chainId":43114,"address":"0x97Cd1CFE2ed5712660bb6c14053C0EcB031Bff7d","name":"Rai Reflex Index","symbol":"RAI","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x97Cd1CFE2ed5712660bb6c14053C0EcB031Bff7d/logo.png"},{"chainId":43114,"address":"0x027dbcA046ca156De9622cD1e2D907d375e53aa7","name":"Ampleforth","symbol":"AMPL","decimals":9,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x027dbcA046ca156De9622cD1e2D907d375e53aa7/logo.png"},{"chainId":43114,"address":"0x8B1d98A91F853218ddbb066F20b8c63E782e2430","name":"OrcaDAO","symbol":"ORCA","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x8B1d98A91F853218ddbb066F20b8c63E782e2430/logo.png"},{"chainId":43114,"address":"0x544c42fBB96B39B21DF61cf322b5EDC285EE7429","name":"InsurAce","symbol":"INSUR","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x544c42fBB96B39B21DF61cf322b5EDC285EE7429/logo.png"},{"chainId":43114,"address":"0xee0f5c0c2c8cFB1473d441868C174de3F3736F70","name":"BABYPANGOLIN","symbol":"BPNG","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xee0f5c0c2c8cFB1473d441868C174de3F3736F70/logo.png"},{"chainId":43114,"address":"0x6C6f910A79639dcC94b4feEF59Ff507c2E843929","name":"Ankr Avalanche Reward Earning Bond","symbol":"aDJTXb","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x6C6f910A79639dcC94b4feEF59Ff507c2E843929/logo.png"},{"chainId":43114,"address":"0xB00F1ad977a949a3CCc389Ca1D1282A2946963b0","name":"BooFinance","symbol":"BOOFI","decimals":18,"logoURI":"https://raw.githubusercontent.com/BooFinance/assets/main/logo.png"},{"chainId":43114,"address":"0x45C13620B55C35A5f539d26E88247011Eb10fDbd","name":"Hurricane Token","symbol":"HCT","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x45C13620B55C35A5f539d26E88247011Eb10fDbd/logo.png"},{"chainId":43114,"address":"0x45CdaF3Fd17BD31d9830Fa977159162DD2431683","name":"KIOO","symbol":"KIOO","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x45CdaF3Fd17BD31d9830Fa977159162DD2431683/logo.png"},{"address":"0x214DB107654fF987AD859F34125307783fC8e387","chainId":43114,"name":"Frax Share","symbol":"FXS","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x214DB107654fF987AD859F34125307783fC8e387/logo.png"},{"address":"0xb2a85C5ECea99187A977aC34303b80AcbDdFa208","chainId":43114,"name":"ROCO","symbol":"ROCO","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xb2a85C5ECea99187A977aC34303b80AcbDdFa208/logo.png"},{"address":"0xeA6887e4a9CdA1B77E70129E5Fba830CdB5cdDef","chainId":43114,"name":"IMX","symbol":"IMX","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xeA6887e4a9CdA1B77E70129E5Fba830CdB5cdDef/logo.png"},{"address":"0x340fE1D898ECCAad394e2ba0fC1F93d27c7b717A","chainId":43114,"name":"Orbs","symbol":"ORBS","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x340fE1D898ECCAad394e2ba0fC1F93d27c7b717A/logo.png"},{"address":"0x937E077aBaEA52d3abf879c9b9d3f2eBd15BAA21","chainId":43114,"name":"Oh Finance","symbol":"OH","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x937E077aBaEA52d3abf879c9b9d3f2eBd15BAA21/logo.png"},{"address":"0x9F87C6c30F4b23C7B51Aa7465A9e0A836514700D","chainId":43114,"name":"AVATerra","symbol":"TERRA","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x9F87C6c30F4b23C7B51Aa7465A9e0A836514700D/logo.png"},{"address":"0x5BcDE17c50652aD6148C970F10Bf06647137A7E4","chainId":43114,"name":"LOAlexandria","symbol":"LOA","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x5BcDE17c50652aD6148C970F10Bf06647137A7E4/logo.png"},{"address":"0x37d87e316CB4e35163881fDb6c6Bc0CdBa91dc0A","chainId":43114,"name":"Stabilize Token","symbol":"SET","decimals":18,"logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x37d87e316CB4e35163881fDb6c6Bc0CdBa91dc0A/logo.png"},{"chainId":43114,"address":"0x7d1232B90D3F809A54eeaeeBC639C62dF8a8942f","decimals":9,"name":"Snowbank","symbol":"SB","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x7d1232B90D3F809A54eeaeeBC639C62dF8a8942f/logo.png"},{"chainId":43114,"address":"0xA32608e873F9DdEF944B24798db69d80Bbb4d1ed","decimals":18,"name":"Crabada","symbol":"CRA","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xA32608e873F9DdEF944B24798db69d80Bbb4d1ed/logo.png"},{"chainId":43114,"address":"0x4Aca0ad6357b918e3d06BB1a0BCC403619177523","decimals":18,"name":"DJTXRush.com - Sonic Token","symbol":"SONIC","logoURI":"https://raw.githubusercontent.com/truemiller/tokens/main/assets/0x4Aca0ad6357b918e3d06BB1a0BCC403619177523/logo.png"},{"chainId":43114,"address":"0x885d748C00A279B67A7749EC6b03301700dd0455","decimals":18,"name":"Maximus","symbol":"MAXI","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x885d748C00A279B67A7749EC6b03301700dd0455/logo.png"},{"chainId":43114,"address":"0x7C08413cbf02202a1c13643dB173f2694e0F73f0","decimals":9,"name":"Maximizer","symbol":"MAXI","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x7C08413cbf02202a1c13643dB173f2694e0F73f0/logo.png"},{"chainId":43114,"address":"0x4f60a160D8C2DDdaAfe16FCC57566dB84D674BD6","decimals":18,"name":"Jewels","symbol":"JEWEL","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x4f60a160D8C2DDdaAfe16FCC57566dB84D674BD6/logo.png"},{"chainId":43114,"address":"0x8aE8be25C23833e0A01Aa200403e826F611f9CD2","decimals":18,"name":"CRAFT","symbol":"CRAFT","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x8aE8be25C23833e0A01Aa200403e826F611f9CD2/logo.png"},{"chainId":43114,"address":"0x321E7092a180BB43555132ec53AaA65a5bF84251","decimals":18,"name":"Governance OHM","symbol":"gOHM","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x321E7092a180BB43555132ec53AaA65a5bF84251/logo.png"},{"chainId":43114,"address":"0x637afeff75ca669fF92e4570B14D6399A658902f","decimals":18,"name":"Cook Finance","symbol":"COOK","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x637afeff75ca669fF92e4570B14D6399A658902f/logo.png"},{"chainId":43114,"address":"0x9E3Ca00f2d4A9E5d4f0add0900de5f15050812cF","decimals":18,"name":"NFTrade Token","symbol":"NFTD","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x9E3Ca00f2d4A9E5d4f0add0900de5f15050812cF/logo.png"},{"chainId":43114,"address":"0xec3492a2508DDf4FDc0cD76F31f340b30d1793e6","decimals":18,"name":"Colony Token","symbol":"CLY","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xec3492a2508DDf4FDc0cD76F31f340b30d1793e6/logo.png"},{"chainId":43114,"address":"0xf69c2fcd9128d49DfA22348C69177f9380438eB8","decimals":6,"name":"NFT Soccer Games","symbol":"NFSG","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xf69c2fcd9128d49DfA22348C69177f9380438eB8/logo.png"},{"chainId":43114,"address":"0x483416eB3aFA601B9C6385f63CeC0C82B6aBf1fb","decimals":18,"name":"Skill Token","symbol":"SKILL","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x483416eB3aFA601B9C6385f63CeC0C82B6aBf1fb/logo.png"},{"chainId":43114,"address":"0x2CF51e73C3516f3d86E9C0B4De0971Dbf0766Fd4","decimals":18,"name":"XIO Network Token","symbol":"XIO","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x2CF51e73C3516f3d86E9C0B4De0971Dbf0766Fd4/logo.png"},{"chainId":43114,"address":"0xBD100d061E120b2c67A24453CF6368E63f1Be056","decimals":18,"name":"iDYP","symbol":"iDYP","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xBD100d061E120b2c67A24453CF6368E63f1Be056/logo.png"},{"chainId":43114,"address":"0x22d4002028f537599bE9f666d1c4Fa138522f9c8","decimals":18,"name":"Platypus Token","symbol":"PTP","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x22d4002028f537599bE9f666d1c4Fa138522f9c8/logo.png"},{"chainId":43114,"address":"0x1C59e9e44b7983931E0aBA8dd0b8571C5f34cC87","decimals":18,"name":"METL Token","symbol":"METL","logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x1C59e9e44b7983931E0aBA8dd0b8571C5f34cC87/logo.png"}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map