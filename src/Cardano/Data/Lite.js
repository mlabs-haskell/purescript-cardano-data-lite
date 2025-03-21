"use strict";

// eslint-disable-next-line no-unused-vars
import * as CDL from "@mlabs-haskell/cardano-data-lite";

// Pass in a function and its list of arguments, that is expected to fail on evaluation, wraps in Either
// eslint-disable-next-line no-unused-vars
function errorableToPurs(f, ...vars) {
  try {
    return f(...vars);
  } catch (err) {
    return null;
  }
}

// Pass in a function and its list of arguments, that is expected to return undefined, wraps in Either
// eslint-disable-next-line no-unused-vars
function undefinedToPurs(f, ...vars) {
  const value = f(...vars);
  if (value === undefined) {
    return null;
  } else {
    return value;
  }
}

// Address
export const address_kind = self => self.kind.bind(self)();
export const address_paymentCred = self =>
  undefinedToPurs(self.payment_cred.bind(self));
export const address_isMalformed = self => self.is_malformed.bind(self)();
export const address_toBech32 = self => prefix =>
  self.to_bech32.bind(self)(prefix);
export const address_fromBech32 = bech_str =>
  errorableToPurs(CDL.Address.from_bech32, bech_str);
export const address_networkId = self => self.network_id.bind(self)();

// Anchor
export const anchor_url = self => self.url.bind(self)();
export const anchor_anchorDataHash = self => self.anchor_data_hash.bind(self)();
export const anchor_new = anchor_url => anchor_data_hash =>
  CDL.Anchor.new(anchor_url, anchor_data_hash);

// AnchorDataHash
export const anchorDataHash_toBech32 = self => prefix =>
  errorableToPurs(self.to_bech32.bind(self), prefix);
export const anchorDataHash_fromBech32 = bech_str =>
  errorableToPurs(CDL.AnchorDataHash.from_bech32, bech_str);

// AssetName
export const assetName_new = bytes => CDL.AssetName.new(bytes);
export const assetName_name = self => self.name.bind(self)();

// AssetNames
export const assetNames_new = () => CDL.AssetNames.new();

// Assets
export const assets_new = () => CDL.Assets.new();

// AuxiliaryData
export const auxiliaryData_newShelleyMetadata = metadata =>
  CDL.AuxiliaryData.new_shelley_metadata(metadata);
export const auxiliaryData_newShelleyMetadataMa = metadata =>
  CDL.AuxiliaryData.new_shelley_metadata_ma(metadata);
export const auxiliaryData_newPostAlonzoMetadata = metadata =>
  CDL.AuxiliaryData.new_postalonzo_metadata(metadata);
export const auxiliaryData_metadata = self =>
  undefinedToPurs(self.metadata.bind(self));
export const auxiliaryData_setMetadata = self => metadata => () =>
  self.set_metadata.bind(self)(metadata);
export const auxiliaryData_nativeScripts = self =>
  undefinedToPurs(self.native_scripts.bind(self));
export const auxiliaryData_setNativeScripts = self => native_scripts => () =>
  self.set_native_scripts.bind(self)(native_scripts);
export const auxiliaryData_plutusScripts_v1 = self =>
  undefinedToPurs(self.plutus_scripts_v1.bind(self));
export const auxiliaryData_plutusScripts_v2 = self =>
  undefinedToPurs(self.plutus_scripts_v2.bind(self));
export const auxiliaryData_plutusScripts_v3 = self =>
  undefinedToPurs(self.plutus_scripts_v3.bind(self));
export const auxiliaryData_setPlutusScripts_v1 = self => plutus_scripts => () =>
  self.set_plutus_scripts_v1.bind(self)(plutus_scripts);
export const auxiliaryData_setPlutusScripts_v2 = self => plutus_scripts => () =>
  self.set_plutus_scripts_v2.bind(self)(plutus_scripts);
export const auxiliaryData_setPlutusScripts_v3 = self => plutus_scripts => () =>
  self.set_plutus_scripts_v3.bind(self)(plutus_scripts);

// AuxiliaryDataShelleyMa
export const auxiliaryDataShelleyMa_new = metadata => native_scripts =>
  CDL.AuxiliaryDataShelleyMa.new(metadata, native_scripts);

// AuxiliaryDataPostAlonzo
export const auxiliaryDataPostAlonzo_new =
  metadata =>
  native_scripts =>
  plutus_scripts_v1 =>
  plutus_scripts_v2 =>
  plutus_scripts_v3 =>
    CDL.AuxiliaryDataPostAlonzo.new(
      metadata,
      native_scripts,
      plutus_scripts_v1,
      plutus_scripts_v2,
      plutus_scripts_v3
    );

// AuxiliaryDataHash
export const auxiliaryDataHash_toBech32 = self => prefix =>
  self.to_bech32.bind(self)(prefix);
export const auxiliaryDataHash_fromBech32 = bech_str =>
  errorableToPurs(CDL.AuxiliaryDataHash.from_bech32, bech_str);

// BaseAddress
export const baseAddress_new = network => payment => stake =>
  new CDL.BaseAddress(network, payment, stake);
export const baseAddress_paymentCred = self => self.payment_cred.bind(self)();
export const baseAddress_stakeCred = self => self.stake_cred.bind(self)();
export const baseAddress_toAddress = self => self.to_address.bind(self)();
export const baseAddress_fromAddress = addr =>
  undefinedToPurs(CDL.BaseAddress.from_address, addr);
export const baseAddress_networkId = self => self.network_id.bind(self)();

// BigInt
export const bigInt_isZero = self => self.is_zero.bind(self)();
export const bigInt_asU64 = self => self.as_u64.bind(self)();
export const bigInt_asInt = self => self.as_int.bind(self)();
export const bigInt_fromStr = text =>
  errorableToPurs(CDL.BigInt.from_str, text);
export const bigInt_toStr = self => self.to_str.bind(self)();
export const bigInt_sub = self => other => self.sub.bind(self)(other);
export const bigInt_mul = self => other => self.mul.bind(self)(other);
export const bigInt_pow = self => exp => self.pow.bind(self)(exp);
export const bigInt_one = CDL.BigInt.one();
export const bigInt_zero = CDL.BigInt.zero();
export const bigInt_abs = self => self.abs.bind(self)();
export const bigInt_increment = self => self.increment.bind(self)();
export const bigInt_divCeil = self => other => self.div_ceil.bind(self)(other);
export const bigInt_divFloor = self => other =>
  self.div_floor.bind(self)(other);

// BigNum
export const bigNum_fromStr = string =>
  errorableToPurs(CDL.BigNum.from_str, string);
export const bigNum_toStr = self => self.to_str.bind(self)();
export const bigNum_zero = CDL.BigNum.zero();
export const bigNum_one = CDL.BigNum.one();
export const bigNum_isZero = self => self.is_zero.bind(self)();
export const bigNum_divFloor = self => other =>
  self.div_floor.bind(self)(other);
export const bigNum_checkedMul = self => other =>
  errorableToPurs(self.checked_mul.bind(self), other);
export const bigNum_checkedAdd = self => other =>
  errorableToPurs(self.checked_add.bind(self), other);
export const bigNum_checkedSub = self => other =>
  errorableToPurs(self.checked_sub.bind(self), other);
export const bigNum_clampedSub = self => other =>
  self.clamped_sub.bind(self)(other);
export const bigNum_compare = self => rhs_value =>
  self.compare.bind(self)(rhs_value);
export const bigNum_lessThan = self => rhs_value =>
  self.less_than.bind(self)(rhs_value);
export const bigNum_maxValue = CDL.BigNum.max_value();
export const bigNum_max = a => b => CDL.BigNum.max(a, b);

// Bip32PrivateKey
export const bip32PrivateKey_derive = self => index =>
  self.derive.bind(self)(index);
export const bip32PrivateKey_from128Xprv = bytes =>
  CDL.Bip32PrivateKey.from_128_xprv(bytes);
export const bip32PrivateKey_to128Xprv = self => self.to_128_xprv.bind(self)();
export const bip32PrivateKey_generateEd25519Bip32 =
  CDL.Bip32PrivateKey.generate_ed25519_bip32();
export const bip32PrivateKey_toRawKey = self => self.to_raw_key.bind(self)();
export const bip32PrivateKey_toPublic = self => self.to_public.bind(self)();
export const bip32PrivateKey_asBytes = self => self.as_bytes.bind(self)();
export const bip32PrivateKey_fromBech32 = bech32_str =>
  errorableToPurs(CDL.Bip32PrivateKey.from_bech32, bech32_str);
export const bip32PrivateKey_toBech32 = self => self.to_bech32.bind(self)();
export const bip32PrivateKey_fromBip39Entropy = entropy => password =>
  CDL.Bip32PrivateKey.from_bip39_entropy(entropy, password);
export const bip32PrivateKey_chaincode = self => self.chaincode.bind(self)();

// Bip32PublicKey
export const bip32PublicKey_chaincode = self => self.chaincode.bind(self)();
export const bip32PublicKey_toBech32 = self => self.to_bech32.bind(self)();
export const bip32PublicKey_fromBech32 = bech32_str =>
  errorableToPurs(CDL.Bip32PublicKey.from_bech32, bech32_str);
export const bip32PublicKey_asBytes = self => self.as_bytes.bind(self)();
export const bip32PublicKey_toRawKey = self => self.to_raw_key.bind(self)();
export const bip32PublicKey_derive = self => index =>
  self.derive.bind(self)(index);

// BootstrapWitness
export const bootstrapWitness_vkey = self => self.vkey.bind(self)();
export const bootstrapWitness_signature = self => self.signature.bind(self)();
export const bootstrapWitness_chainCode = self => self.chain_code.bind(self)();
export const bootstrapWitness_attributes = self => self.attributes.bind(self)();
export const bootstrapWitness_new =
  vkey => signature => chain_code => attributes =>
    CDL.BootstrapWitness.new(vkey, signature, chain_code, attributes);

// BootstrapWitnesses
export const bootstrapWitnesses_new = () => CDL.BootstrapWitnesses.new();

// ByronAddress
export const byronAddress_toBase58 = self => self.to_base58.bind(self)();
export const byronAddress_byronProtocolMagic = self =>
  self.byron_protocol_magic.bind(self)();
export const byronAddress_attributes = self => self.attributes.bind(self)();
export const byronAddress_networkId = self => self.network_id.bind(self)();
export const byronAddress_fromBase58 = s =>
  errorableToPurs(CDL.ByronAddress.from_base58, s);
export const byronAddress_isValid = s => CDL.ByronAddress.is_valid(s);
export const byronAddress_toAddress = self => self.to_address.bind(self)();
export const byronAddress_fromAddress = addr =>
  undefinedToPurs(CDL.ByronAddress.from_address, addr);

// Certificate
export const certificate_newStakeRegistration = stake_registration =>
  CDL.Certificate.new_stake_registration(stake_registration);
export const certificate_newRegCert = stake_registration =>
  CDL.Certificate.new_reg_cert(stake_registration);
export const certificate_newStakeDeregistration = stake_deregistration =>
  CDL.Certificate.new_stake_deregistration(stake_deregistration);
export const certificate_newUnregCert = stake_deregistration =>
  CDL.Certificate.new_unreg_cert(stake_deregistration);
export const certificate_newStakeDelegation = stake_delegation =>
  CDL.Certificate.new_stake_delegation(stake_delegation);
export const certificate_newPoolRegistration = pool_registration =>
  CDL.Certificate.new_pool_registration(pool_registration);
export const certificate_newPoolRetirement = pool_retirement =>
  CDL.Certificate.new_pool_retirement(pool_retirement);
export const certificate_newCommitteeHotAuth = committee_hot_auth =>
  CDL.Certificate.new_committee_hot_auth(committee_hot_auth);
export const certificate_newCommitteeColdResign = committee_cold_resign =>
  CDL.Certificate.new_committee_cold_resign(committee_cold_resign);
export const certificate_newDrepDeregistration = drep_deregistration =>
  CDL.Certificate.new_drep_deregistration(drep_deregistration);
export const certificate_newDrepRegistration = drep_registration =>
  CDL.Certificate.new_drep_registration(drep_registration);
export const certificate_newDrepUpdate = drep_update =>
  CDL.Certificate.new_drep_update(drep_update);
export const certificate_newStakeAndVoteDelegation =
  stake_and_vote_delegation =>
    CDL.Certificate.new_stake_and_vote_delegation(stake_and_vote_delegation);
export const certificate_newStakeRegistrationAndDelegation =
  stake_registration_and_delegation =>
    CDL.Certificate.new_stake_registration_and_delegation(
      stake_registration_and_delegation
    );
export const certificate_newStakeVoteRegistrationAndDelegation =
  stake_vote_registration_and_delegation =>
    CDL.Certificate.new_stake_vote_registration_and_delegation(
      stake_vote_registration_and_delegation
    );
export const certificate_newVoteDelegation = vote_delegation =>
  CDL.Certificate.new_vote_delegation(vote_delegation);
export const certificate_newVoteRegistrationAndDelegation =
  vote_registration_and_delegation =>
    CDL.Certificate.new_vote_registration_and_delegation(
      vote_registration_and_delegation
    );
export const certificate_kind = self => self.kind.bind(self)();
export const certificate_asStakeRegistration = self =>
  undefinedToPurs(self.as_stake_registration.bind(self));
export const certificate_asRegCert = self =>
  undefinedToPurs(self.as_reg_cert.bind(self));
export const certificate_asStakeDeregistration = self =>
  undefinedToPurs(self.as_stake_deregistration.bind(self));
export const certificate_asUnregCert = self =>
  undefinedToPurs(self.as_unreg_cert.bind(self));
export const certificate_asStakeDelegation = self =>
  undefinedToPurs(self.as_stake_delegation.bind(self));
export const certificate_asPoolRegistration = self =>
  undefinedToPurs(self.as_pool_registration.bind(self));
export const certificate_asPoolRetirement = self =>
  undefinedToPurs(self.as_pool_retirement.bind(self));
export const certificate_asCommitteeHotAuth = self =>
  undefinedToPurs(self.as_committee_hot_auth.bind(self));
export const certificate_asCommitteeColdResign = self =>
  undefinedToPurs(self.as_committee_cold_resign.bind(self));
export const certificate_asDrepDeregistration = self =>
  undefinedToPurs(self.as_drep_deregistration.bind(self));
export const certificate_asDrepRegistration = self =>
  undefinedToPurs(self.as_drep_registration.bind(self));
export const certificate_asDrepUpdate = self =>
  undefinedToPurs(self.as_drep_update.bind(self));
export const certificate_asStakeAndVoteDelegation = self =>
  undefinedToPurs(self.as_stake_and_vote_delegation.bind(self));
export const certificate_asStakeRegistrationAndDelegation = self =>
  undefinedToPurs(self.as_stake_registration_and_delegation.bind(self));
export const certificate_asStakeVoteRegistrationAndDelegation = self =>
  undefinedToPurs(self.as_stake_vote_registration_and_delegation.bind(self));
export const certificate_asVoteDelegation = self =>
  undefinedToPurs(self.as_vote_delegation.bind(self));
export const certificate_asVoteRegistrationAndDelegation = self =>
  undefinedToPurs(self.as_vote_registration_and_delegation.bind(self));

// Certificates
export const certificates_new = () => CDL.Certificates.new();

// ChangeConfig
export const changeConfig_new = address => CDL.ChangeConfig.new(address);
export const changeConfig_changeAddress = self => address =>
  self.change_address.bind(self)(address);
export const changeConfig_changePlutusData = self => plutus_data =>
  self.change_plutus_data.bind(self)(plutus_data);
export const changeConfig_changeScriptRef = self => script_ref =>
  self.change_script_ref.bind(self)(script_ref);

// Committee
export const committee_new = quorum_threshold => () =>
  CDL.Committee.new(quorum_threshold);
export const committee_membersKeys = self => self.members_keys.bind(self)();
export const committee_quorumThreshold = self =>
  self.quorum_threshold.bind(self)();
export const committee_addMember =
  self => committee_cold_credential => epoch => () =>
    self.add_member.bind(self)(committee_cold_credential, epoch);
export const committee_getMemberEpoch = self => committee_cold_credential =>
  self.get_member_epoch.bind(self)(committee_cold_credential);

// CommitteeColdResign
export const committeeColdResign_committeeColdCredential = self =>
  self.committee_cold_credential.bind(self)();
export const committeeColdResign_anchor = self => self.anchor.bind(self)();
export const committeeColdResign_new = committee_cold_credential =>
  CDL.CommitteeColdResign.new(committee_cold_credential);
export const committeeColdResign_newWithAnchor =
  committee_cold_credential => anchor =>
    CDL.CommitteeColdResign.new_with_anchor(committee_cold_credential, anchor);

// CommitteeHotAuth
export const committeeHotAuth_committeeColdCredential = self =>
  self.committee_cold_credential.bind(self)();
export const committeeHotAuth_committeeHotCredential = self =>
  self.committee_hot_credential.bind(self)();
export const committeeHotAuth_new =
  committee_cold_credential => committee_hot_credential =>
    CDL.CommitteeHotAuth.new(
      committee_cold_credential,
      committee_hot_credential
    );

// Constitution
export const constitution_anchor = self => self.anchor.bind(self)();
export const constitution_scriptHash = self => self.script_hash.bind(self)();
export const constitution_new = anchor => CDL.Constitution.new(anchor);
export const constitution_newWithScriptHash = anchor => script_hash =>
  CDL.Constitution.new_with_script_hash(anchor, script_hash);

// ConstrPlutusData
export const constrPlutusData_alternative = self =>
  self.alternative.bind(self)();
export const constrPlutusData_data = self => self.data.bind(self)();
export const constrPlutusData_new = alternative => data =>
  CDL.ConstrPlutusData.new(alternative, data);

// CostModel
export const costModel_free = self => errorableToPurs(self.free.bind(self));
export const costModel_toBytes = self => self.to_bytes.bind(self)();
export const costModel_fromBytes = bytes =>
  errorableToPurs(CDL.CostModel.from_bytes, bytes);
export const costModel_toHex = self => self.to_hex.bind(self)();
export const costModel_fromHex = hex_str =>
  errorableToPurs(CDL.CostModel.from_hex, hex_str);
export const costModel_toJson = self => self.to_json.bind(self)();
export const costModel_fromJson = json =>
  errorableToPurs(CDL.CostModel.from_json, json);
export const costModel_new = () => CDL.CostModel.new();
export const costModel_set = self => operation => cost => () =>
  self.set.bind(self)(operation, cost);
export const costModel_get = self => operation => () =>
  self.get.bind(self)(operation);
export const costModel_len = self => () => self.len.bind(self)();

// Costmdls
export const costmdls_new = () => CDL.Costmdls.new();
export const costmdls_retainLanguageVersions = self => languages =>
  self.retain_language_versions.bind(self)(languages);

// Credential
export const credential_fromKeyhash = hash => CDL.Credential.from_keyhash(hash);
export const credential_fromScripthash = hash =>
  CDL.Credential.from_scripthash(hash);
export const credential_toKeyhash = self =>
  undefinedToPurs(self.to_keyhash.bind(self));
export const credential_toScripthash = self =>
  undefinedToPurs(self.to_scripthash.bind(self));
export const credential_kind = self => self.kind.bind(self)();
export const credential_hasScriptHash = self =>
  self.has_script_hash.bind(self)();

// Credentials
export const credentials_new = CDL.Credentials.new();

// Data
export const data_new = bytes => CDL.Data.new(bytes);
export const data_encodedPlutusData = self =>
  self.encoded_plutus_data.bind(self)();

// DataOption
export const dataOption_newData = data => CDL.DataOption.new_data(data);
export const dataOption_newHash = hash => CDL.DataOption.new_hash(hash);
export const dataOption_asData = self =>
  undefinedToPurs(self.as_data.bind(self));
export const dataOption_asHash = self =>
  undefinedToPurs(self.as_hash.bind(self));

// DNSRecordAorAAAA
export const dnsRecordAorAAAA_new = dns_name =>
  CDL.DNSRecordAorAAAA.new(dns_name);
export const dnsRecordAorAAAA_record = self => self.record.bind(self)();

// DNSRecordSRV
export const dnsRecordSRV_new = dns_name => CDL.DNSRecordSRV.new(dns_name);
export const dnsRecordSRV_record = self => self.record.bind(self)();

// DRep
export const dRep_newKeyHash = key_hash => CDL.DRep.new_key_hash(key_hash);
export const dRep_newScriptHash = script_hash =>
  CDL.DRep.new_script_hash(script_hash);
export const dRep_newAlwaysAbstain = CDL.DRep.new_always_abstain();
export const dRep_newAlwaysNoConfidence = CDL.DRep.new_always_no_confidence();
export const dRep_newFromCredential = cred =>
  CDL.DRep.new_from_credential(cred);
export const dRep_kind = self => self.kind.bind(self)();
export const dRep_toKeyHash = self =>
  undefinedToPurs(self.as_key_hash.bind(self));
export const dRep_toScriptHash = self =>
  undefinedToPurs(self.as_script_hash.bind(self));
export const dRep_toBech32 = self => self.to_bech32.bind(self)();
export const dRep_fromBech32 = bech32_str =>
  errorableToPurs(CDL.DRep.from_bech32, bech32_str);

// DRepDeregistration
export const dRepDeregistration_drepCredential = self =>
  self.drep_credential.bind(self)();
export const dRepDeregistration_coin = self => self.coin.bind(self)();
export const dRepDeregistration_new = voting_credential => coin =>
  CDL.DRepDeregistration.new(voting_credential, coin);

// DRepRegistration
export const dRepRegistration_votingCredential = self =>
  self.voting_credential.bind(self)();
export const dRepRegistration_coin = self => self.coin.bind(self)();
export const dRepRegistration_anchor = self => self.anchor.bind(self)();
export const dRepRegistration_new = voting_credential => coin =>
  CDL.DRepRegistration.new(voting_credential, coin);
export const dRepRegistration_newWithAnchor =
  voting_credential => coin => anchor =>
    CDL.DRepRegistration.new_with_anchor(voting_credential, coin, anchor);

// DRepUpdate
export const dRepUpdate_drepCredential = self =>
  self.drep_credential.bind(self)();
export const dRepUpdate_anchor = self => self.anchor.bind(self)();
export const dRepUpdate_new = voting_credential =>
  CDL.DRepUpdate.new(voting_credential);
export const dRepUpdate_newWithAnchor = voting_credential => anchor =>
  CDL.DRepUpdate.new_with_anchor(voting_credential, anchor);

// DRepVotingThresholds
export const dRepVotingThresholds_new =
  motion_no_confidence =>
  committee_normal =>
  committee_no_confidence =>
  update_constitution =>
  hard_fork_initiation =>
  pp_network_group =>
  pp_economic_group =>
  pp_technical_group =>
  pp_governance_group =>
  treasury_withdrawal =>
    CDL.DRepVotingThresholds.new(
      motion_no_confidence,
      committee_normal,
      committee_no_confidence,
      update_constitution,
      hard_fork_initiation,
      pp_network_group,
      pp_economic_group,
      pp_technical_group,
      pp_governance_group,
      treasury_withdrawal
    );
export const dRepVotingThresholds_setMotionNoConfidence =
  self => motion_no_confidence => () =>
    self.set_motion_no_confidence.bind(self)(motion_no_confidence);
export const dRepVotingThresholds_setCommitteeNormal =
  self => committee_normal => () =>
    self.set_committee_normal.bind(self)(committee_normal);
export const dRepVotingThresholds_setCommitteeNoConfidence =
  self => committee_no_confidence => () =>
    self.set_committee_no_confidence.bind(self)(committee_no_confidence);
export const dRepVotingThresholds_setUpdateConstitution =
  self => update_constitution => () =>
    self.set_update_constitution.bind(self)(update_constitution);
export const dRepVotingThresholds_setHardForkInitiation =
  self => hard_fork_initiation => () =>
    self.set_hard_fork_initiation.bind(self)(hard_fork_initiation);
export const dRepVotingThresholds_setPpNetworkGroup =
  self => pp_network_group => () =>
    self.set_pp_network_group.bind(self)(pp_network_group);
export const dRepVotingThresholds_setPpEconomicGroup =
  self => pp_economic_group => () =>
    self.set_pp_economic_group.bind(self)(pp_economic_group);
export const dRepVotingThresholds_setPpTechnicalGroup =
  self => pp_technical_group => () =>
    self.set_pp_technical_group.bind(self)(pp_technical_group);
export const dRepVotingThresholds_setPpGovernanceGroup =
  self => pp_governance_group => () =>
    self.set_pp_governance_group.bind(self)(pp_governance_group);
export const dRepVotingThresholds_setTreasuryWithdrawal =
  self => treasury_withdrawal => () =>
    self.set_treasury_withdrawal.bind(self)(treasury_withdrawal);
export const dRepVotingThresholds_motionNoConfidence = self =>
  self.motion_no_confidence.bind(self)();
export const dRepVotingThresholds_committeeNormal = self =>
  self.committee_normal.bind(self)();
export const dRepVotingThresholds_committeeNoConfidence = self =>
  self.committee_no_confidence.bind(self)();
export const dRepVotingThresholds_updateConstitution = self =>
  self.update_constitution.bind(self)();
export const dRepVotingThresholds_hardForkInitiation = self =>
  self.hard_fork_initiation.bind(self)();
export const dRepVotingThresholds_ppNetworkGroup = self =>
  self.pp_network_group.bind(self)();
export const dRepVotingThresholds_ppEconomicGroup = self =>
  self.pp_economic_group.bind(self)();
export const dRepVotingThresholds_ppTechnicalGroup = self =>
  self.pp_technical_group.bind(self)();
export const dRepVotingThresholds_ppGovernanceGroup = self =>
  self.pp_governance_group.bind(self)();
export const dRepVotingThresholds_treasuryWithdrawal = self =>
  self.treasury_withdrawal.bind(self)();

// DataCost
export const dataCost_newCoinsPerByte = coins_per_byte =>
  CDL.DataCost.new_coins_per_byte(coins_per_byte);
export const dataCost_coinsPerByte = self => self.coins_per_byte.bind(self)();

// DataHash
export const dataHash_toBech32 = self => prefix =>
  self.to_bech32.bind(self)(prefix);
export const dataHash_fromBech32 = bech_str =>
  errorableToPurs(CDL.DataHash.from_bech32, bech_str);

// DatumSource
export const datumSource_newDatum = datum => CDL.DatumSource.new_datum(datum);
export const datumSource_newRefInput = input =>
  CDL.DatumSource.new_ref_input(input);

// Ed25519KeyHash
export const ed25519KeyHash_toBech32 = self => prefix =>
  self.to_bech32.bind(self)(prefix);
export const ed25519KeyHash_fromBech32 = bech_str =>
  errorableToPurs(CDL.Ed25519KeyHash.from_bech32, bech_str);

// Ed25519KeyHashes
export const ed25519KeyHashes_new = CDL.Ed25519KeyHashes.new();

// Ed25519Signature
export const ed25519Signature_toBech32 = self => self.to_bech32.bind(self)();
export const ed25519Signature_fromBech32 = bech32_str =>
  errorableToPurs(CDL.Ed25519Signature.from_bech32, bech32_str);

// EnterpriseAddress
export const enterpriseAddress_new = network => payment =>
  CDL.EnterpriseAddress.new(network, payment);
export const enterpriseAddress_paymentCred = self =>
  self.payment_cred.bind(self)();
export const enterpriseAddress_toAddress = self => self.to_address.bind(self)();
export const enterpriseAddress_fromAddress = addr =>
  undefinedToPurs(CDL.EnterpriseAddress.from_address, addr);
export const enterpriseAddress_networkId = self => self.network_id.bind(self)();

// ExUnitPrices
export const exUnitPrices_memPrice = self => self.mem_price.bind(self)();
export const exUnitPrices_stepPrice = self => self.step_price.bind(self)();
export const exUnitPrices_new = mem_price => step_price =>
  CDL.ExUnitPrices.new(mem_price, step_price);

// ExUnits
export const exUnits_mem = self => self.mem.bind(self)();
export const exUnits_steps = self => self.steps.bind(self)();
export const exUnits_new = mem => steps => CDL.ExUnits.new(mem, steps);

// GeneralTransactionMetadata
export const generalTransactionMetadata_new = () =>
  CDL.GeneralTransactionMetadata.new();

// GenesisDelegateHash
export const genesisDelegateHash_toBech32 = self => prefix =>
  self.to_bech32.bind(self)(prefix);
export const genesisDelegateHash_fromBech32 = bech_str =>
  errorableToPurs(CDL.GenesisDelegateHash.from_bech32, bech_str);

// GenesisHash
export const genesisHash_toBech32 = self => prefix =>
  self.to_bech32.bind(self)(prefix);
export const genesisHash_fromBech32 = bech_str =>
  errorableToPurs(CDL.GenesisHash.from_bech32, bech_str);

// GenesisHashes
export const genesisHashes_new = () => CDL.GenesisHashes.new();

// GovernanceAction
export const governanceAction_newParameterChangeAction =
  parameter_change_action =>
    CDL.GovernanceAction.new_parameter_change_action(parameter_change_action);
export const governanceAction_newHardForkInitiationAction =
  hard_fork_initiation_action =>
    CDL.GovernanceAction.new_hard_fork_initiation_action(
      hard_fork_initiation_action
    );
export const governanceAction_newTreasuryWithdrawalsAction =
  treasury_withdrawals_action =>
    CDL.GovernanceAction.new_treasury_withdrawals_action(
      treasury_withdrawals_action
    );
export const governanceAction_newNoConfidenceAction = no_confidence_action =>
  CDL.GovernanceAction.new_no_confidence_action(no_confidence_action);
export const governanceAction_newNewCommitteeAction = new_committee_action =>
  CDL.GovernanceAction.new_new_committee_action(new_committee_action);
export const governanceAction_newNewConstitutionAction =
  new_constitution_action =>
    CDL.GovernanceAction.new_new_constitution_action(new_constitution_action);
export const governanceAction_newInfoAction = info_action =>
  CDL.GovernanceAction.new_info_action(info_action);
export const governanceAction_kind = self => self.kind.bind(self)();
export const governanceAction_asParameterChangeAction = self =>
  self.as_parameter_change_action.bind(self)();
export const governanceAction_asHardForkInitiationAction = self =>
  self.as_hard_fork_initiation_action.bind(self)();
export const governanceAction_asTreasuryWithdrawalsAction = self =>
  self.as_treasury_withdrawals_action.bind(self)();
export const governanceAction_asNoConfidenceAction = self =>
  self.as_no_confidence_action.bind(self)();
export const governanceAction_asNewCommitteeAction = self =>
  self.as_new_committee_action.bind(self)();
export const governanceAction_asNewConstitutionAction = self =>
  self.as_new_constitution_action.bind(self)();
export const governanceAction_asInfoAction = self =>
  self.as_info_action.bind(self)();

// GovernanceActionId
export const governanceActionId_transactionId = self =>
  self.transaction_id.bind(self)();
export const governanceActionId_index = self => self.index.bind(self)();
export const governanceActionId_new = transaction_id => index =>
  CDL.GovernanceActionId.new(transaction_id, index);

// GovernanceActionIds
export const governanceActionIds_new = CDL.GovernanceActionIds.new();

// HardForkInitiationAction
export const hardForkInitiationAction_govActionId = self =>
  self.gov_action_id.bind(self)();
export const hardForkInitiationAction_protocolVersion = self =>
  self.protocol_version.bind(self)();
export const hardForkInitiationAction_new = protocol_version =>
  CDL.HardForkInitiationAction.new(protocol_version);
export const hardForkInitiationAction_newWithActionId =
  gov_action_id => protocol_version =>
    CDL.HardForkInitiationAction.new_with_action_id(
      gov_action_id,
      protocol_version
    );

// InfoAction
export const infoAction_new = CDL.InfoAction.new();

// Int
export const int_new = x => CDL.Int.new(x);
export const int_newNegative = x => CDL.Int.new_negative(x);
export const int_newI32 = x => CDL.Int.new_i32(x);
export const int_isPositive = self => self.is_positive.bind(self)();
export const int_asPositive = self => self.as_positive.bind(self)();
export const int_asNegative = self => self.as_negative.bind(self)();
export const int_asI32 = self => self.as_i32.bind(self)();
export const int_asI32OrNothing = self => self.as_i32_or_nothing.bind(self)();
export const int_asI32OrFail = self => self.as_i32_or_fail.bind(self)();
export const int_toStr = self => self.to_str.bind(self)();
export const int_fromStr = string => errorableToPurs(CDL.Int.from_str, string);

// Ipv4
export const ipv4_new = data => CDL.Ipv4.new(data);
export const ipv4_ip = self => self.ip.bind(self)();

// Ipv6
export const ipv6_new = data => CDL.Ipv6.new(data);
export const ipv6_ip = self => self.ip.bind(self)();

// KESSignature

// KESVKey
export const kesvKey_toBech32 = self => prefix =>
  self.to_bech32.bind(self)(prefix);
export const kesvKey_fromBech32 = bech_str =>
  errorableToPurs(CDL.KESVKey.from_bech32, bech_str);

// Language
export const language_newPlutusV1 = CDL.Language.new_plutus_v1();
export const language_newPlutusV2 = CDL.Language.new_plutus_v2();
export const language_newPlutusV3 = CDL.Language.new_plutus_v3();
export const language_kind = self => self.kind.bind(self)();

// Languages
export const languages_new = () => CDL.Languages.new();
export const languages_list = CDL.Languages.list();

// LinearFee
export const linearFee_constant = self => self.constant.bind(self)();
export const linearFee_coefficient = self => self.coefficient.bind(self)();
export const linearFee_new = coefficient => constant =>
  CDL.LinearFee.new(coefficient, constant);

// MalformedAddress
export const malformedAddress_originalBytes = self =>
  self.original_bytes.bind(self)();
export const malformedAddress_toAddress = self => self.to_address.bind(self)();
export const malformedAddress_fromAddress = addr =>
  undefinedToPurs(CDL.MalformedAddress.from_address, addr);

// MetadataList
export const metadataList_new = () => CDL.MetadataList.new();

// MetadataMap
export const metadataMap_new = () => CDL.MetadataMap.new();
export const metadataMap_insertStr = self => key => value => () =>
  self.insert_str.bind(self)(key, value);
export const metadataMap_insertI32 = self => key => value => () =>
  self.insert_i32.bind(self)(key, value);
export const metadataMap_getStr = self => key => () =>
  self.get_str.bind(self)(key);
export const metadataMap_getI32 = self => key => () =>
  self.get_i32.bind(self)(key);
export const metadataMap_has = self => key => () => self.has.bind(self)(key);

// Mint
export const mint_new = () => CDL.Mint.new();
export const mint_newFromEntry = key => value => () =>
  CDL.Mint.new_from_entry(key, value);
export const mint_asPositiveMultiasset = self => () =>
  self.as_positive_multiasset.bind(self)();
export const mint_asNegativeMultiasset = self => () =>
  self.as_negative_multiasset.bind(self)();

// MintAssets
export const mintAssets_new = () => CDL.MintAssets.new();
export const mintAssets_newFromEntry = key => value =>
  CDL.MintAssets.new_from_entry(key, value);

// MintsAssets
export const mintsAssets_new = CDL.MintsAssets.new();

// MultiAsset
export const multiAsset_new = () => CDL.MultiAsset.new();
export const multiAsset_setAsset =
  self => policy_id => asset_name => value => () =>
    self.set_asset.bind(self)(policy_id, asset_name, value);
export const multiAsset_getAsset = self => policy_id => asset_name => () =>
  self.get_asset.bind(self)(policy_id, asset_name);
export const multiAsset_sub = self => rhs_ma => () =>
  self.sub.bind(self)(rhs_ma);

// MultiHostName
export const multiHostName_dnsName = self => self.dns_name.bind(self)();
export const multiHostName_new = dns_name => CDL.MultiHostName.new(dns_name);

// NativeScript
export const nativeScript_hash = self => self.hash.bind(self)();
export const nativeScript_newScriptPubkey = script_pubkey =>
  CDL.NativeScript.new_script_pubkey(script_pubkey);
export const nativeScript_newScriptAll = script_all =>
  CDL.NativeScript.new_script_all(script_all);
export const nativeScript_newScriptAny = script_any =>
  CDL.NativeScript.new_script_any(script_any);
export const nativeScript_newScriptNOfK = script_n_of_k =>
  CDL.NativeScript.new_script_n_of_k(script_n_of_k);
export const nativeScript_newTimelockStart = timelock_start =>
  CDL.NativeScript.new_timelock_start(timelock_start);
export const nativeScript_newTimelockExpiry = timelock_expiry =>
  CDL.NativeScript.new_timelock_expiry(timelock_expiry);
export const nativeScript_kind = self => self.kind.bind(self)();
export const nativeScript_asScriptPubkey = self =>
  self.as_script_pubkey.bind(self)();
export const nativeScript_asScriptAll = self => self.as_script_all.bind(self)();
export const nativeScript_asScriptAny = self => self.as_script_any.bind(self)();
export const nativeScript_asScriptNOfK = self =>
  self.as_script_n_of_k.bind(self)();
export const nativeScript_asTimelockStart = self =>
  self.as_timelock_start.bind(self)();
export const nativeScript_asTimelockExpiry = self =>
  self.as_timelock_expiry.bind(self)();
export const nativeScript_getRequiredSigners = self =>
  self.get_required_signers.bind(self)();

// NativeScriptSource
export const nativeScriptSource_new = script =>
  CDL.NativeScriptSource.new(script);
export const nativeScriptSource_newRefInput =
  script_hash => input => script_size =>
    CDL.NativeScriptSource.new_ref_input(script_hash, input, script_size);
export const nativeScriptSource_setRequiredSigners = self => key_hashes => () =>
  self.set_required_signers.bind(self)(key_hashes);
export const nativeScriptSource_getRefScriptSize = self =>
  self.get_ref_script_size.bind(self)();

// NativeScripts
export const nativeScripts_new = () => CDL.NativeScripts.new();

// NetworkId
export const networkId_testnet = CDL.NetworkId.testnet();
export const networkId_mainnet = CDL.NetworkId.mainnet();
export const networkId_kind = self => self.kind.bind(self)();

// NetworkInfo
export const networkInfo_new = network_id => protocol_magic =>
  CDL.NetworkInfo.new(network_id, protocol_magic);
export const networkInfo_networkId = self => self.network_id.bind(self)();
export const networkInfo_protocolMagic = self =>
  self.protocol_magic.bind(self)();
export const networkInfo_testnetPreview = CDL.NetworkInfo.testnet_preview();
export const networkInfo_testnetPreprod = CDL.NetworkInfo.testnet_preprod();
export const networkInfo_mainnet = CDL.NetworkInfo.mainnet();

// NewConstitutionAction
export const newConstitutionAction_govActionId = self =>
  self.gov_action_id.bind(self)();
export const newConstitutionAction_constitution = self =>
  self.constitution.bind(self)();
export const newConstitutionAction_new = constitution =>
  CDL.NewConstitutionAction.new(constitution);
export const newConstitutionAction_newWithActionId =
  gov_action_id => constitution =>
    CDL.NewConstitutionAction.new_with_action_id(gov_action_id, constitution);

// NoConfidenceAction
export const noConfidenceAction_govActionId = self =>
  self.gov_action_id.bind(self)();
export const noConfidenceAction_new = CDL.NoConfidenceAction.new();
export const noConfidenceAction_newWithActionId = gov_action_id =>
  CDL.NoConfidenceAction.new_with_action_id(gov_action_id);

// Nonce
export const nonce_newIdentity = CDL.Nonce.new_identity();
export const nonce_newFromHash = hash => CDL.Nonce.new_from_hash(hash);
export const nonce_getHash = self => self.get_hash.bind(self)();

// OperationalCert
export const operationalCert_hotVkey = self => self.hot_vkey.bind(self)();
export const operationalCert_sequenceNumber = self =>
  self.sequence_number.bind(self)();
export const operationalCert_kesPeriod = self => self.kes_period.bind(self)();
export const operationalCert_sigma = self => self.sigma.bind(self)();
export const operationalCert_new =
  hot_vkey => sequence_number => kes_period => sigma =>
    CDL.OperationalCert.new(hot_vkey, sequence_number, kes_period, sigma);

// OutputDatum
export const outputDatum_newDataHash = data_hash =>
  CDL.OutputDatum.new_data_hash(data_hash);
export const outputDatum_newData = data => CDL.OutputDatum.new_data(data);
export const outputDatum_dataHash = self =>
  undefinedToPurs(self.as_data_hash.bind(self));
export const outputDatum_data = self =>
  undefinedToPurs(self.as_data.bind(self));

// ParameterChangeAction
export const parameterChangeAction_govActionId = self =>
  self.gov_action_id.bind(self)();
export const parameterChangeAction_protocolParamUpdates = self =>
  self.protocol_param_updates.bind(self)();
export const parameterChangeAction_policyHash = self =>
  self.policy_hash.bind(self)();
export const parameterChangeAction_new = protocol_param_updates =>
  CDL.ParameterChangeAction.new(protocol_param_updates);
export const parameterChangeAction_newWithActionId =
  gov_action_id => protocol_param_updates =>
    CDL.ParameterChangeAction.new_with_action_id(
      gov_action_id,
      protocol_param_updates
    );
export const parameterChangeAction_newWithPolicyHash =
  protocol_param_updates => policy_hash =>
    CDL.ParameterChangeAction.new_with_policy_hash(
      protocol_param_updates,
      policy_hash
    );
export const parameterChangeAction_newWithPolicyHashAndActionId =
  gov_action_id => protocol_param_updates => policy_hash =>
    CDL.ParameterChangeAction.new_with_policy_hash_and_action_id(
      gov_action_id,
      protocol_param_updates,
      policy_hash
    );

// PlutusData
export const plutusData_fromBytes = bytes =>
  errorableToPurs(CDL.PlutusData.from_bytes, bytes);
export const plutusData_newConstrPlutusData = constr_plutus_data =>
  CDL.PlutusData.new_constr_plutus_data(constr_plutus_data);
export const plutusData_newEmptyConstrPlutusData = alternative =>
  CDL.PlutusData.new_empty_constr_plutus_data(alternative);
export const plutusData_newSingleValueConstrPlutusData =
  alternative => plutus_data =>
    CDL.PlutusData.new_single_value_constr_plutus_data(
      alternative,
      plutus_data
    );
export const plutusData_newMap = map => CDL.PlutusData.new_map(map);
export const plutusData_newList = list => CDL.PlutusData.new_list(list);
export const plutusData_newInteger = integer =>
  CDL.PlutusData.new_integer(integer);
export const plutusData_newBytes = bytes => CDL.PlutusData.new_bytes(bytes);
export const plutusData_kind = self => self.kind.bind(self)();
export const plutusData_asConstrPlutusData = self =>
  errorableToPurs(self.as_constr_plutus_data.bind(self));
export const plutusData_asMap = self => errorableToPurs(self.as_map.bind(self));
export const plutusData_asList = self =>
  errorableToPurs(self.as_list.bind(self));
export const plutusData_asInteger = self =>
  errorableToPurs(self.as_integer.bind(self));
export const plutusData_asBytes = self =>
  errorableToPurs(self.as_bytes.bind(self));
export const plutusData_fromAddress = address =>
  CDL.PlutusData.from_address(address);
export const plutusData_asAddress = self => network =>
  self.as_address.bind(self)(network);

// PlutusList
export const plutusList_new = () => CDL.PlutusList.new();

// PlutusMap
export const plutusMap_new = () => CDL.PlutusMap.new();
export const plutusMap_keys = self => self.keys.bind(self)();
export const plutusMap_values = self => self.values.bind(self)();

// PlutusMapValues
export const plutusMapValues_new = CDL.PlutusMapValues.new();

// PlutusScript
export const plutusScript_new = bytes => CDL.PlutusScript.new(bytes);
export const plutusScript_bytes = self => self.bytes.bind(self)();
export const plutusScript_fromBytes = bytes =>
  errorableToPurs(CDL.PlutusScript.from_bytes(bytes));
export const plutusScript_fromHex = hex_str =>
  errorableToPurs(CDL.PlutusScript.from_hex, hex_str);
export const plutusScript_hash = self => number => self.hash(number);

// PlutusScripts
export const plutusScripts_new = () => CDL.PlutusScripts.new();

// PoolMetadata
export const poolMetadata_url = self => self.url.bind(self)();
export const poolMetadata_poolMetadataHash = self =>
  self.pool_metadata_hash.bind(self)();
export const poolMetadata_new = url => pool_metadata_hash =>
  CDL.PoolMetadata.new(url, pool_metadata_hash);

// PoolMetadataHash
export const poolMetadataHash_toBech32 = self => prefix =>
  self.to_bech32.bind(self)(prefix);
export const poolMetadataHash_fromBech32 = bech_str =>
  errorableToPurs(CDL.PoolMetadataHash.from_bech32, bech_str);

// PoolParams
export const poolParams_operator = self => self.operator.bind(self)();
export const poolParams_vrfKeyhash = self => self.vrf_keyhash.bind(self)();
export const poolParams_pledge = self => self.pledge.bind(self)();
export const poolParams_cost = self => self.cost.bind(self)();
export const poolParams_margin = self => self.margin.bind(self)();
export const poolParams_rewardAccount = self =>
  self.reward_account.bind(self)();
export const poolParams_poolOwners = self => self.pool_owners.bind(self)();
export const poolParams_relays = self => self.relays.bind(self)();
export const poolParams_poolMetadata = self => self.pool_metadata.bind(self)();
export const poolParams_new =
  operator =>
  vrf_keyhash =>
  pledge =>
  cost =>
  margin =>
  reward_account =>
  pool_owners =>
  relays =>
  pool_metadata =>
    CDL.PoolParams.new(
      operator,
      vrf_keyhash,
      pledge,
      cost,
      margin,
      reward_account,
      pool_owners,
      relays,
      pool_metadata
    );

// PoolRegistration
export const poolRegistration_poolParams = self =>
  self.pool_params.bind(self)();
export const poolRegistration_new = pool_params =>
  CDL.PoolRegistration.new(pool_params);

// PoolRetirement
export const poolRetirement_poolKeyhash = self =>
  self.pool_keyhash.bind(self)();
export const poolRetirement_epoch = self => self.epoch.bind(self)();
export const poolRetirement_new = pool_keyhash => epoch =>
  CDL.PoolRetirement.new(pool_keyhash, epoch);

// PoolVotingThresholds
export const poolVotingThresholds_new =
  motion_no_confidence =>
  committee_normal =>
  committee_no_confidence =>
  hard_fork_initiation =>
  security_relevant_threshold =>
    CDL.PoolVotingThresholds.new(
      motion_no_confidence,
      committee_normal,
      committee_no_confidence,
      hard_fork_initiation,
      security_relevant_threshold
    );
export const poolVotingThresholds_motionNoConfidence = self =>
  self.motion_no_confidence.bind(self)();
export const poolVotingThresholds_committeeNormal = self =>
  self.committee_normal.bind(self)();
export const poolVotingThresholds_committeeNoConfidence = self =>
  self.committee_no_confidence.bind(self)();
export const poolVotingThresholds_hardForkInitiation = self =>
  self.hard_fork_initiation.bind(self)();
export const poolVotingThresholds_securityRelevantThreshold = self =>
  self.security_relevant_threshold.bind(self)();

// PrivateKey
export const privateKey_free = self => errorableToPurs(self.free.bind(self));
export const privateKey_fromHex = hex_str =>
  errorableToPurs(CDL.PrivateKey.from_hex, hex_str);
export const privateKey_toHex = self => self.to_hex.bind(self)();
export const privateKey_sign = self => message => self.sign.bind(self)(message);
export const privateKey_fromNormalBytes = bytes =>
  errorableToPurs(CDL.PrivateKey.from_normal_bytes, bytes);
export const privateKey_fromExtendedBytes = bytes =>
  errorableToPurs(CDL.PrivateKey.from_extended_bytes, bytes);
export const privateKey_asBytes = self => self.as_bytes.bind(self)();
export const privateKey_toBech32 = self => self.to_bech32.bind(self)();
export const privateKey_fromBech32 = bech32_str =>
  errorableToPurs(CDL.PrivateKey.from_bech32, bech32_str);
export const privateKey_generateEd25519extended = () =>
  CDL.PrivateKey.generate_ed25519extended();
export const privateKey_generateEd25519 = () =>
  CDL.PrivateKey.generate_ed25519();
export const privateKey_toPublic = self => self.to_public.bind(self)();

// ProposedProtocolParameterUpdates
export const proposedProtocolParameterUpdates_new = () =>
  CDL.ProposedProtocolParameterUpdates.new();

// ProtocolParamUpdate
export const protocolParamUpdate_setMinfeeA = self => minfee_a => () =>
  self.set_minfee_a.bind(self)(minfee_a);
export const protocolParamUpdate_minfeeA = self => self.minfee_a.bind(self)();
export const protocolParamUpdate_setMinfeeB = self => minfee_b => () =>
  self.set_minfee_b.bind(self)(minfee_b);
export const protocolParamUpdate_minfeeB = self => self.minfee_b.bind(self)();
export const protocolParamUpdate_setMaxBlockBodySize =
  self => max_block_body_size => () =>
    self.set_max_block_body_size.bind(self)(max_block_body_size);
export const protocolParamUpdate_maxBlockBodySize = self =>
  self.max_block_body_size.bind(self)();
export const protocolParamUpdate_setMaxTxSize = self => max_tx_size => () =>
  self.set_max_tx_size.bind(self)(max_tx_size);
export const protocolParamUpdate_maxTxSize = self =>
  self.max_tx_size.bind(self)();
export const protocolParamUpdate_setMaxBlockHeaderSize =
  self => max_block_header_size => () =>
    self.set_max_block_header_size.bind(self)(max_block_header_size);
export const protocolParamUpdate_maxBlockHeaderSize = self =>
  self.max_block_header_size.bind(self)();
export const protocolParamUpdate_setKeyDeposit = self => key_deposit => () =>
  self.set_key_deposit.bind(self)(key_deposit);
export const protocolParamUpdate_keyDeposit = self =>
  self.key_deposit.bind(self)();
export const protocolParamUpdate_setPoolDeposit = self => pool_deposit => () =>
  self.set_pool_deposit.bind(self)(pool_deposit);
export const protocolParamUpdate_poolDeposit = self =>
  self.pool_deposit.bind(self)();
export const protocolParamUpdate_setMaxEpoch = self => max_epoch => () =>
  self.set_max_epoch.bind(self)(max_epoch);
export const protocolParamUpdate_maxEpoch = self => self.max_epoch.bind(self)();
export const protocolParamUpdate_setNOpt = self => n_opt => () =>
  self.set_n_opt.bind(self)(n_opt);
export const protocolParamUpdate_nOpt = self => self.n_opt.bind(self)();
export const protocolParamUpdate_setPoolPledgeInfluence =
  self => pool_pledge_influence => () =>
    self.set_pool_pledge_influence.bind(self)(pool_pledge_influence);
export const protocolParamUpdate_poolPledgeInfluence = self =>
  self.pool_pledge_influence.bind(self)();
export const protocolParamUpdate_setExpansionRate =
  self => expansion_rate => () =>
    self.set_expansion_rate.bind(self)(expansion_rate);
export const protocolParamUpdate_expansionRate = self =>
  self.expansion_rate.bind(self)();
export const protocolParamUpdate_setTreasuryGrowthRate =
  self => treasury_growth_rate => () =>
    self.set_treasury_growth_rate.bind(self)(treasury_growth_rate);
export const protocolParamUpdate_treasuryGrowthRate = self =>
  self.treasury_growth_rate.bind(self)();
export const protocolParamUpdate_d = self => self.d.bind(self)();
export const protocolParamUpdate_extraEntropy = self =>
  self.extra_entropy.bind(self)();
export const protocolParamUpdate_setProtocolVersion =
  self => protocol_version => () =>
    self.set_protocol_version.bind(self)(protocol_version);
export const protocolParamUpdate_protocolVersion = self =>
  self.protocol_version.bind(self)();
export const protocolParamUpdate_setMinPoolCost = self => min_pool_cost => () =>
  self.set_min_pool_cost.bind(self)(min_pool_cost);
export const protocolParamUpdate_minPoolCost = self =>
  self.min_pool_cost.bind(self)();
export const protocolParamUpdate_setAdaPerUtxoByte =
  self => ada_per_utxo_byte => () =>
    self.set_ada_per_utxo_byte.bind(self)(ada_per_utxo_byte);
export const protocolParamUpdate_adaPerUtxoByte = self =>
  self.ada_per_utxo_byte.bind(self)();
export const protocolParamUpdate_setCostModels = self => cost_models => () =>
  self.set_cost_models.bind(self)(cost_models);
export const protocolParamUpdate_costModels = self =>
  self.cost_models.bind(self)();
export const protocolParamUpdate_setExecutionCosts =
  self => execution_costs => () =>
    self.set_execution_costs.bind(self)(execution_costs);
export const protocolParamUpdate_executionCosts = self =>
  self.execution_costs.bind(self)();
export const protocolParamUpdate_setMaxTxExUnits =
  self => max_tx_ex_units => () =>
    self.set_max_tx_ex_units.bind(self)(max_tx_ex_units);
export const protocolParamUpdate_maxTxExUnits = self =>
  self.max_tx_ex_units.bind(self)();
export const protocolParamUpdate_setMaxBlockExUnits =
  self => max_block_ex_units => () =>
    self.set_max_block_ex_units.bind(self)(max_block_ex_units);
export const protocolParamUpdate_maxBlockExUnits = self =>
  self.max_block_ex_units.bind(self)();
export const protocolParamUpdate_setMaxValueSize =
  self => max_value_size => () =>
    self.set_max_value_size.bind(self)(max_value_size);
export const protocolParamUpdate_maxValueSize = self =>
  self.max_value_size.bind(self)();
export const protocolParamUpdate_setCollateralPercentage =
  self => collateral_percentage => () =>
    self.set_collateral_percentage.bind(self)(collateral_percentage);
export const protocolParamUpdate_collateralPercentage = self =>
  self.collateral_percentage.bind(self)();
export const protocolParamUpdate_setMaxCollateralInputs =
  self => max_collateral_inputs => () =>
    self.set_max_collateral_inputs.bind(self)(max_collateral_inputs);
export const protocolParamUpdate_maxCollateralInputs = self =>
  self.max_collateral_inputs.bind(self)();
export const protocolParamUpdate_setPoolVotingThresholds =
  self => pool_voting_thresholds => () =>
    self.set_pool_voting_thresholds.bind(self)(pool_voting_thresholds);
export const protocolParamUpdate_poolVotingThresholds = self =>
  self.pool_voting_thresholds.bind(self)();
export const protocolParamUpdate_setDrepVotingThresholds =
  self => drep_voting_thresholds => () =>
    self.set_drep_voting_thresholds.bind(self)(drep_voting_thresholds);
export const protocolParamUpdate_drepVotingThresholds = self =>
  self.drep_voting_thresholds.bind(self)();
export const protocolParamUpdate_setMinCommitteeSize =
  self => min_committee_size => () =>
    self.set_min_committee_size.bind(self)(min_committee_size);
export const protocolParamUpdate_minCommitteeSize = self =>
  self.min_committee_size.bind(self)();
export const protocolParamUpdate_setCommitteeTermLimit =
  self => committee_term_limit => () =>
    self.set_committee_term_limit.bind(self)(committee_term_limit);
export const protocolParamUpdate_committeeTermLimit = self =>
  self.committee_term_limit.bind(self)();
export const protocolParamUpdate_setGovernanceActionValidityPeriod =
  self => governance_action_validity_period => () =>
    self.set_governance_action_validity_period.bind(self)(
      governance_action_validity_period
    );
export const protocolParamUpdate_governanceActionValidityPeriod = self =>
  self.governance_action_validity_period.bind(self)();
export const protocolParamUpdate_setGovernanceActionDeposit =
  self => governance_action_deposit => () =>
    self.set_governance_action_deposit.bind(self)(governance_action_deposit);
export const protocolParamUpdate_governanceActionDeposit = self =>
  self.governance_action_deposit.bind(self)();
export const protocolParamUpdate_setDrepDeposit = self => drep_deposit => () =>
  self.set_drep_deposit.bind(self)(drep_deposit);
export const protocolParamUpdate_drepDeposit = self =>
  self.drep_deposit.bind(self)();
export const protocolParamUpdate_setDrepInactivityPeriod =
  self => drep_inactivity_period => () =>
    self.set_drep_inactivity_period.bind(self)(drep_inactivity_period);
export const protocolParamUpdate_drepInactivityPeriod = self =>
  self.drep_inactivity_period.bind(self)();
export const protocolParamUpdate_setRefScriptCoinsPerByte =
  self => ref_script_coins_per_byte => () =>
    self.set_ref_script_coins_per_byte.bind(self)(ref_script_coins_per_byte);
export const protocolParamUpdate_refScriptCoinsPerByte = self =>
  self.ref_script_coins_per_byte.bind(self)();
export const protocolParamUpdate_new = CDL.ProtocolParamUpdate.new();

// ProtocolVersion
export const protocolVersion_major = self => self.major.bind(self)();
export const protocolVersion_minor = self => self.minor.bind(self)();
export const protocolVersion_new = major => minor =>
  CDL.ProtocolVersion.new(major, minor);

// PublicKey
export const publicKey_free = self => errorableToPurs(self.free.bind(self));
export const publicKey_fromHex = hex_str =>
  errorableToPurs(CDL.PublicKey.from_hex, hex_str);
export const publicKey_toHex = self => self.to_hex.bind(self)();
export const publicKey_hash = self => self.hash.bind(self)();
export const publicKey_verify = self => data => signature =>
  self.verify.bind(self)(data, signature);
export const publicKey_fromBytes = bytes =>
  errorableToPurs(CDL.PublicKey.from_bytes, bytes);
export const publicKey_asBytes = self => self.as_bytes.bind(self)();
export const publicKey_toBech32 = self => self.to_bech32.bind(self)();
export const publicKey_fromBech32 = bech32_str =>
  errorableToPurs(CDL.PublicKey.from_bech32, bech32_str);

// Redeemer
export const redeemer_tag = self => self.tag.bind(self)();
export const redeemer_index = self => self.index.bind(self)();
export const redeemer_data = self => self.data.bind(self)();
export const redeemer_exUnits = self => self.ex_units.bind(self)();
export const redeemer_new = tag => index => data => ex_units =>
  CDL.Redeemer.new(tag, index, data, ex_units);

// RedeemerTag
export const redeemerTag_newSpend = CDL.RedeemerTag.new_spending();
export const redeemerTag_newMint = CDL.RedeemerTag.new_minting();
export const redeemerTag_newCert = CDL.RedeemerTag.new_certifying();
export const redeemerTag_newReward = CDL.RedeemerTag.new_rewarding();
export const redeemerTag_newVote = CDL.RedeemerTag.new_voting();
export const redeemerTag_newVotingProposal = CDL.RedeemerTag.new_proposing();
export const redeemerTag_kind = self => self.kind.bind(self)();

// Redeemers
export const redeemers_new = () => CDL.Redeemers.new();
export const redeemers_getContainerType = self =>
  self.get_container_type.bind(self)();
export const redeemers_totalExUnits = self => self.total_ex_units.bind(self)();

// Relay
export const relay_newSingleHostAddr = single_host_addr =>
  CDL.Relay.new_single_host_addr(single_host_addr);
export const relay_newSingleHostName = single_host_name =>
  CDL.Relay.new_single_host_name(single_host_name);
export const relay_newMultiHostName = multi_host_name =>
  CDL.Relay.new_multi_host_name(multi_host_name);
export const relay_kind = self => self.kind.bind(self)();
export const relay_asSingleHostAddr = self =>
  self.as_single_host_addr.bind(self)();
export const relay_asSingleHostName = self =>
  self.as_single_host_name.bind(self)();
export const relay_asMultiHostName = self =>
  self.as_multi_host_name.bind(self)();

// Relays
export const relays_new = () => CDL.Relays.new();

// RewardAddress
export const rewardAddress_new = network => payment =>
  CDL.RewardAddress.new(network, payment);
export const rewardAddress_paymentCred = self => self.payment_cred.bind(self)();
export const rewardAddress_toAddress = self => self.to_address.bind(self)();
export const rewardAddress_fromAddress = addr =>
  undefinedToPurs(CDL.RewardAddress.from_address, addr);
export const rewardAddress_networkId = self => self.network_id.bind(self)();

// RewardAddresses
export const rewardAddresses_new = () => CDL.RewardAddresses.new();

// ScriptAll
export const scriptAll_nativeScripts = self => self.native_scripts.bind(self)();
export const scriptAll_new = native_scripts =>
  CDL.ScriptAll.new(native_scripts);

// ScriptAny
export const scriptAny_nativeScripts = self => self.native_scripts.bind(self)();
export const scriptAny_new = native_scripts =>
  CDL.ScriptAny.new(native_scripts);

// ScriptDataHash
export const scriptDataHash_toBech32 = self => prefix =>
  self.to_bech32.bind(self)(prefix);
export const scriptDataHash_fromBech32 = bech_str =>
  errorableToPurs(CDL.ScriptDataHash.from_bech32, bech_str);

// ScriptHash
export const scriptHash_toBech32 = self => prefix =>
  self.to_bech32.bind(self)(prefix);
export const scriptHash_fromBech32 = bech_str =>
  errorableToPurs(CDL.ScriptHash.from_bech32, bech_str);

// ScriptHashes
export const scriptHashes_new = () => CDL.ScriptHashes.new();

// ScriptNOfK
export const scriptNOfK_n = self => self.n.bind(self)();
export const scriptNOfK_nativeScripts = self =>
  self.native_scripts.bind(self)();
export const scriptNOfK_new = n => native_scripts =>
  CDL.ScriptNOfK.new(n, native_scripts);

// ScriptPubkey
export const scriptPubkey_addrKeyhash = self => self.addr_keyhash.bind(self)();
export const scriptPubkey_new = addr_keyhash =>
  CDL.ScriptPubkey.new(addr_keyhash);

// ScriptRef
export const scriptRef_newNativeScript = native_script =>
  CDL.ScriptRef.new_native_script(native_script);
export const scriptRef_newPlutusScript_v1 = plutus_script =>
  CDL.ScriptRef.new_plutus_script_v1(plutus_script);
export const scriptRef_newPlutusScript_v2 = plutus_script =>
  CDL.ScriptRef.new_plutus_script_v2(plutus_script);
export const scriptRef_newPlutusScript_v3 = plutus_script =>
  CDL.ScriptRef.new_plutus_script_v3(plutus_script);
export const scriptRef_isNativeScript = self =>
  self.is_native_script.bind(self)();
export const scriptRef_isPlutusScript = self =>
  self.is_plutus_script.bind(self)();
export const scriptRef_nativeScript = self =>
  undefinedToPurs(self.as_native_script.bind(self));
export const scriptRef_plutusScript_v1 = self =>
  undefinedToPurs(self.as_plutus_script_v1.bind(self));
export const scriptRef_plutusScript_v2 = self =>
  undefinedToPurs(self.as_plutus_script_v2.bind(self));
export const scriptRef_plutusScript_v3 = self =>
  undefinedToPurs(self.as_plutus_script_v3.bind(self));
export const scriptRef_toUnwrappedBytes = self =>
  self.to_unwrapped_bytes.bind(self)();

// SingleHostAddr
export const singleHostAddr_port = self => self.port.bind(self)();
export const singleHostAddr_ipv4 = self => self.ipv4.bind(self)();
export const singleHostAddr_ipv6 = self => self.ipv6.bind(self)();
export const singleHostAddr_new = port => ipv4 => ipv6 =>
  CDL.SingleHostAddr.new(port, ipv4, ipv6);

// SingleHostName
export const singleHostName_port = self => self.port.bind(self)();
export const singleHostName_dnsName = self => self.dns_name.bind(self)();
export const singleHostName_new = port => dns_name =>
  CDL.SingleHostName.new(port, dns_name);

// StakeAndVoteDelegation
export const stakeAndVoteDelegation_stakeCredential = self =>
  self.stake_credential.bind(self)();
export const stakeAndVoteDelegation_poolKeyhash = self =>
  self.pool_keyhash.bind(self)();
export const stakeAndVoteDelegation_drep = self => self.drep.bind(self)();
export const stakeAndVoteDelegation_new =
  stake_credential => pool_keyhash => drep =>
    CDL.StakeAndVoteDelegation.new(stake_credential, pool_keyhash, drep);

// StakeDelegation
export const stakeDelegation_stakeCredential = self =>
  self.stake_credential.bind(self)();
export const stakeDelegation_poolKeyhash = self =>
  self.pool_keyhash.bind(self)();
export const stakeDelegation_new = stake_credential => pool_keyhash =>
  CDL.StakeDelegation.new(stake_credential, pool_keyhash);

// StakeDeregistration
export const stakeDeregistration_stakeCredential = self =>
  self.stake_credential.bind(self)();
export const stakeDeregistration_coin = self => self.coin.bind(self)();
export const stakeDeregistration_new = stake_credential =>
  CDL.StakeDeregistration.new(stake_credential);

// StakeRegistration
export const stakeRegistration_stakeCredential = self =>
  self.stake_credential.bind(self)();
export const stakeRegistration_coin = self => self.coin.bind(self)();
export const stakeRegistration_new = stake_credential =>
  CDL.StakeRegistration.new(stake_credential);

// StakeRegistrationAndDelegation
export const stakeRegistrationAndDelegation_stakeCredential = self =>
  self.stake_credential.bind(self)();
export const stakeRegistrationAndDelegation_poolKeyhash = self =>
  self.pool_keyhash.bind(self)();
export const stakeRegistrationAndDelegation_coin = self =>
  self.coin.bind(self)();
export const stakeRegistrationAndDelegation_new =
  stake_credential => pool_keyhash => coin =>
    CDL.StakeRegistrationAndDelegation.new(
      stake_credential,
      pool_keyhash,
      coin
    );

// StakeVoteRegistrationAndDelegation
export const stakeVoteRegistrationAndDelegation_stakeCredential = self =>
  self.stake_credential.bind(self)();
export const stakeVoteRegistrationAndDelegation_poolKeyhash = self =>
  self.pool_keyhash.bind(self)();
export const stakeVoteRegistrationAndDelegation_drep = self =>
  self.drep.bind(self)();
export const stakeVoteRegistrationAndDelegation_coin = self =>
  self.coin.bind(self)();
export const stakeVoteRegistrationAndDelegation_new =
  stake_credential => pool_keyhash => drep => coin =>
    CDL.StakeVoteRegistrationAndDelegation.new(
      stake_credential,
      pool_keyhash,
      drep,
      coin
    );

// TimelockExpiry
export const timelockExpiry_slot = self => self.slot.bind(self)();
export const timelockExpiry_slotBignum = self => self.slot_bignum.bind(self)();
export const timelockExpiry_new = slot => CDL.TimelockExpiry.new(slot);
export const timelockExpiry_newTimelockexpiry = slot =>
  CDL.TimelockExpiry.new_timelockexpiry(slot);

// TimelockStart
export const timelockStart_slot = self => self.slot.bind(self)();
export const timelockStart_slotBignum = self => self.slot_bignum.bind(self)();
export const timelockStart_new = slot => CDL.TimelockStart.new(slot);
export const timelockStart_newTimelockstart = slot =>
  CDL.TimelockStart.new_timelockstart(slot);

// Transaction
export const transaction_body = self => self.body.bind(self)();
export const transaction_witnessSet = self => self.witness_set.bind(self)();
export const transaction_isValid = self => self.is_valid.bind(self)();
export const transaction_auxiliaryData = self =>
  self.auxiliary_data.bind(self)();
export const transaction_setIsValid = self => valid => () =>
  self.set_is_valid.bind(self)(valid);
export const transaction_new = body => witness_set => auxiliary_data =>
  CDL.Transaction.new(body, witness_set, auxiliary_data);

// TransactionBatch

// TransactionBatchList

// TransactionBody
export const transactionBody_inputs = self => self.inputs.bind(self)();
export const transactionBody_outputs = self => self.outputs.bind(self)();
export const transactionBody_fee = self => self.fee.bind(self)();
export const transactionBody_ttl = self => self.ttl.bind(self)();
export const transactionBody_ttlBignum = self => self.ttl_bignum.bind(self)();
export const transactionBody_setTtl = self => ttl => () =>
  self.set_ttl.bind(self)(ttl);
export const transactionBody_removeTtl = self =>
  errorableToPurs(self.remove_ttl.bind(self));
export const transactionBody_setCerts = self => certs => () =>
  self.set_certs.bind(self)(certs);
export const transactionBody_certs = self => self.certs.bind(self)();
export const transactionBody_setWithdrawals = self => withdrawals => () =>
  self.set_withdrawals.bind(self)(withdrawals);
export const transactionBody_withdrawals = self =>
  self.withdrawals.bind(self)();
export const transactionBody_setUpdate = self => update => () =>
  self.set_update.bind(self)(update);
export const transactionBody_update = self => self.update.bind(self)();
export const transactionBody_setAuxiliaryDataHash =
  self => auxiliary_data_hash => () =>
    self.set_auxiliary_data_hash.bind(self)(auxiliary_data_hash);
export const transactionBody_auxiliaryDataHash = self =>
  self.auxiliary_data_hash.bind(self)();
export const transactionBody_setValidityStartInterval =
  self => validity_start_interval => () =>
    self.set_validity_start_interval.bind(self)(validity_start_interval);
export const transactionBody_setValidityStartIntervalBignum =
  self => validity_start_interval => () =>
    self.set_validity_start_interval_bignum.bind(self)(validity_start_interval);
export const transactionBody_validityStartIntervalBignum = self =>
  self.validity_start_interval_bignum.bind(self)();
export const transactionBody_validityStartInterval = self =>
  self.validity_start_interval.bind(self)();
export const transactionBody_setMint = self => mint => () =>
  self.set_mint.bind(self)(mint);
export const transactionBody_mint = self => self.mint.bind(self)();
export const transactionBody_setReferenceInputs =
  self => reference_inputs => () =>
    self.set_reference_inputs.bind(self)(reference_inputs);
export const transactionBody_referenceInputs = self =>
  self.reference_inputs.bind(self)();
export const transactionBody_setScriptDataHash =
  self => script_data_hash => () =>
    self.set_script_data_hash.bind(self)(script_data_hash);
export const transactionBody_scriptDataHash = self =>
  self.script_data_hash.bind(self)();
export const transactionBody_setCollateral = self => collateral => () =>
  self.set_collateral.bind(self)(collateral);
export const transactionBody_collateral = self => self.collateral.bind(self)();
export const transactionBody_setRequiredSigners =
  self => required_signers => () =>
    self.set_required_signers.bind(self)(required_signers);
export const transactionBody_requiredSigners = self =>
  self.required_signers.bind(self)();
export const transactionBody_setNetworkId = self => network_id => () =>
  self.set_network_id.bind(self)(network_id);
export const transactionBody_networkId = self => self.network_id.bind(self)();
export const transactionBody_setCollateralReturn =
  self => collateral_return => () =>
    self.set_collateral_return.bind(self)(collateral_return);
export const transactionBody_collateralReturn = self =>
  self.collateral_return.bind(self)();
export const transactionBody_setTotalCollateral =
  self => total_collateral => () =>
    self.set_total_collateral.bind(self)(total_collateral);
export const transactionBody_totalCollateral = self =>
  self.total_collateral.bind(self)();
export const transactionBody_setVotingProcedures =
  self => voting_procedures => () =>
    self.set_voting_procedures.bind(self)(voting_procedures);
export const transactionBody_votingProcedures = self =>
  self.voting_procedures.bind(self)();
export const transactionBody_setVotingProposals =
  self => voting_proposals => () =>
    self.set_voting_proposals.bind(self)(voting_proposals);
export const transactionBody_votingProposals = self =>
  self.voting_proposals.bind(self)();
export const transactionBody_setDonation = self => donation => () =>
  self.set_donation.bind(self)(donation);
export const transactionBody_donation = self => self.donation.bind(self)();
export const transactionBody_setCurrentTreasuryValue =
  self => current_treasury_value => () =>
    self.set_current_treasury_value.bind(self)(current_treasury_value);
export const transactionBody_currentTreasuryValue = self =>
  self.current_treasury_value.bind(self)();
export const transactionBody_new = inputs => outputs => fee => ttl =>
  CDL.TransactionBody.new(inputs, outputs, fee, ttl);
export const transactionBody_newTxBody = inputs => outputs => fee =>
  CDL.TransactionBody.new_tx_body(inputs, outputs, fee);

// TransactionHash
export const transactionHash_toBech32 = self => prefix =>
  self.to_bech32.bind(self)(prefix);
export const transactionHash_fromBech32 = bech_str =>
  errorableToPurs(CDL.TransactionHash.from_bech32, bech_str);

// TransactionInput
export const transactionInput_transactionId = self =>
  self.transaction_id.bind(self)();
export const transactionInput_index = self => self.index.bind(self)();
export const transactionInput_new = transaction_id => index =>
  CDL.TransactionInput.new(transaction_id, index);

// TransactionInputs
export const transactionInputs_new = () => CDL.TransactionInputs.new();
export const transactionInputs_toOption = self => self.to_option.bind(self)();

// TransactionMetadatum
export const transactionMetadatum_newMap = map =>
  CDL.TransactionMetadatum.new_map(map);
export const transactionMetadatum_newList = list =>
  CDL.TransactionMetadatum.new_list(list);
export const transactionMetadatum_newInt = int =>
  CDL.TransactionMetadatum.new_int(int);
export const transactionMetadatum_newBytes = bytes =>
  CDL.TransactionMetadatum.new_bytes(bytes);
export const transactionMetadatum_newText = text =>
  CDL.TransactionMetadatum.new_text(text);
export const transactionMetadatum_kind = self => self.kind.bind(self)();
export const transactionMetadatum_asMap = self =>
  errorableToPurs(self.as_map.bind(self));
export const transactionMetadatum_asList = self =>
  errorableToPurs(self.as_list.bind(self));
export const transactionMetadatum_asInt = self =>
  errorableToPurs(self.as_int.bind(self));
export const transactionMetadatum_asBytes = self =>
  errorableToPurs(self.as_bytes.bind(self));
export const transactionMetadatum_asText = self =>
  errorableToPurs(self.as_text.bind(self));

// TransactionMetadatumLabels
export const transactionMetadatumLabels_new = () =>
  CDL.TransactionMetadatumLabels.new();

// TransactionOutput
export const transactionOutput_address = self => self.address.bind(self)();
export const transactionOutput_amount = self => self.amount.bind(self)();
export const transactionOutput_dataHash = self =>
  undefinedToPurs(self.data_hash.bind(self));
export const transactionOutput_datumOption = self =>
  undefinedToPurs(self.datum_option.bind(self));
export const transactionOutput_scriptRef = self =>
  undefinedToPurs(self.script_ref.bind(self));
export const transactionOutput_setScriptRef = self => script_ref => () =>
  self.set_script_ref.bind(self)(script_ref);
export const transactionOutput_setDatumOption = self => datum => () =>
  self.set_datum_option.bind(self)(datum);
export const transactionOutput_setDataHash = self => data_hash => () =>
  self.set_data_hash.bind(self)(data_hash);
export const transactionOutput_hasPlutusData = self =>
  self.has_plutus_data.bind(self)();
export const transactionOutput_hasDataHash = self =>
  self.has_data_hash.bind(self)();
export const transactionOutput_hasScriptRef = self =>
  self.has_script_ref.bind(self)();
export const transactionOutput_new = address => amount =>
  CDL.TransactionOutput.new(address, amount);

// TransactionOutputs
export const transactionOutputs_new = () => CDL.TransactionOutputs.new();

// TransactionUnspentOutput
export const transactionUnspentOutput_new = input => output =>
  CDL.TransactionUnspentOutput.new(input, output);
export const transactionUnspentOutput_input = self => self.input.bind(self)();
export const transactionUnspentOutput_output = self => self.output.bind(self)();

// TransactionUnspentOutputs
export const transactionUnspentOutputs_new = () =>
  CDL.TransactionUnspentOutputs.new();

// TransactionWitnessSet
export const transactionWitnessSet_setVkeys = self => vkeys => () =>
  self.set_vkeys.bind(self)(vkeys);
export const transactionWitnessSet_vkeys = self => self.vkeys.bind(self)();
export const transactionWitnessSet_setNativeScripts =
  self => native_scripts => () =>
    self.set_native_scripts.bind(self)(native_scripts);
export const transactionWitnessSet_nativeScripts = self =>
  self.native_scripts.bind(self)();
export const transactionWitnessSet_setBootstraps = self => bootstraps => () =>
  self.set_bootstraps.bind(self)(bootstraps);
export const transactionWitnessSet_bootstraps = self =>
  self.bootstraps.bind(self)();
export const transactionWitnessSet_setPlutusScripts_v1 =
  self => plutus_scripts => () =>
    self.set_plutus_scripts_v1.bind(self)(plutus_scripts);
export const transactionWitnessSet_setPlutusScripts_v2 =
  self => plutus_scripts => () =>
    self.set_plutus_scripts_v2.bind(self)(plutus_scripts);
export const transactionWitnessSet_setPlutusScripts_v3 =
  self => plutus_scripts => () =>
    self.set_plutus_scripts_v3.bind(self)(plutus_scripts);
export const transactionWitnessSet_plutusScripts_v1 = self =>
  undefinedToPurs(self.plutus_scripts_v1.bind(self));
export const transactionWitnessSet_plutusScripts_v2 = self =>
  undefinedToPurs(self.plutus_scripts_v2.bind(self));
export const transactionWitnessSet_plutusScripts_v3 = self =>
  undefinedToPurs(self.plutus_scripts_v3.bind(self));
export const transactionWitnessSet_setPlutusData = self => plutus_data => () =>
  self.set_plutus_data.bind(self)(plutus_data);
export const transactionWitnessSet_plutusData = self =>
  undefinedToPurs(self.plutus_data.bind(self));
export const transactionWitnessSet_setRedeemers = self => redeemers => () =>
  self.set_redeemers.bind(self)(redeemers);
export const transactionWitnessSet_redeemers = self =>
  self.redeemers.bind(self)();
export const transactionWitnessSet_new = () => CDL.TransactionWitnessSet.new();

// TreasuryWithdrawals
export const treasuryWithdrawals_new = CDL.TreasuryWithdrawals.new();

// TreasuryWithdrawalsAction
export const treasuryWithdrawalsAction_withdrawals = self =>
  self.withdrawals.bind(self)();
export const treasuryWithdrawalsAction_policyHash = self =>
  self.policy_hash.bind(self)();
export const treasuryWithdrawalsAction_new = withdrawals =>
  CDL.TreasuryWithdrawalsAction.new(withdrawals);
export const treasuryWithdrawalsAction_newWithPolicyHash =
  withdrawals => policy_hash =>
    CDL.TreasuryWithdrawalsAction.new_with_policy_hash(
      withdrawals,
      policy_hash
    );

// URL
export const url_new = url => CDL.URL.new(url);
export const url_url = self => self.url.bind(self)();

// UnitInterval
export const unitInterval_numerator = self => self.numerator.bind(self)();
export const unitInterval_denominator = self => self.denominator.bind(self)();
export const unitInterval_new = numerator => denominator =>
  CDL.UnitInterval.new(numerator, denominator);

// Update
export const update_proposedProtocolParameterUpdates = self =>
  self.proposed_protocol_parameter_updates.bind(self)();
export const update_epoch = self => self.epoch.bind(self)();
export const update_new = proposed_protocol_parameter_updates => epoch =>
  CDL.Update.new(proposed_protocol_parameter_updates, epoch);

// UpdateCommitteeAction
export const updateCommitteeAction_govActionId = self =>
  self.gov_action_id.bind(self)();
export const updateCommitteeAction_committee = self =>
  self.committee.bind(self)();
export const updateCommitteeAction_membersToRemove = self =>
  self.members_to_remove.bind(self)();
export const updateCommitteeAction_new = committee => members_to_remove =>
  CDL.UpdateCommitteeAction.new(committee, members_to_remove);
export const updateCommitteeAction_newWithActionId =
  gov_action_id => committee => members_to_remove =>
    CDL.UpdateCommitteeAction.new_with_action_id(
      gov_action_id,
      committee,
      members_to_remove
    );

// VRFCert
export const vrfCert_output = self => self.output.bind(self)();
export const vrfCert_proof = self => self.proof.bind(self)();
export const vrfCert_new = output => proof => CDL.VRFCert.new(output, proof);

// VRFKeyHash
export const vrfKeyHash_toBech32 = self => prefix =>
  self.to_bech32.bind(self)(prefix);
export const vrfKeyHash_fromBech32 = bech_str =>
  errorableToPurs(CDL.VRFKeyHash.from_bech32, bech_str);

// VRFVKey
export const vrfvKey_toBech32 = self => prefix =>
  self.to_bech32.bind(self)(prefix);
export const vrfvKey_fromBech32 = bech_str =>
  errorableToPurs(CDL.VRFVKey.from_bech32, bech_str);

// Value
export const value_new = coin => CDL.Value.new(coin);
export const value_newFromAssets = multiasset =>
  CDL.Value.new_from_assets(multiasset);
export const value_newWithAssets = coin => multiasset =>
  CDL.Value.new_with_assets(coin, multiasset);
export const value_zero = CDL.Value.zero();
export const value_isZero = self => self.is_zero.bind(self)();
export const value_coin = self => self.coin.bind(self)();
export const value_setCoin = self => coin => () =>
  self.set_coin.bind(self)(coin);
export const value_multiasset = self => self.multiasset.bind(self)();
export const value_setMultiasset = self => multiasset => () =>
  self.set_multiasset.bind(self)(multiasset);
export const value_checkedAdd = self => rhs =>
  errorableToPurs(self.checked_add.bind(self), rhs);
export const value_checkedSub = self => rhs_value =>
  errorableToPurs(self.checked_sub.bind(self), rhs_value);
export const value_clampedSub = self => rhs_value =>
  self.clamped_sub.bind(self)(rhs_value);
export const value_compare = self => rhs_value =>
  self.compare.bind(self)(rhs_value);

// Vkey
export const vkey_new = pk => CDL.Vkey.new(pk);
export const vkey_publicKey = self => self.public_key.bind(self)();

// Vkeys
export const vkeys_new = () => CDL.Vkeys.new();

// Vkeywitness
export const vkeywitness_new = vkey => signature =>
  CDL.Vkeywitness.new(vkey, signature);
export const vkeywitness_vkey = self => self.vkey.bind(self)();
export const vkeywitness_signature = self => self.signature.bind(self)();

// Vkeywitnesses
export const vkeywitnesses_new = () => CDL.Vkeywitnesses.new();

// VoteDelegation
export const voteDelegation_stakeCredential = self =>
  self.stake_credential.bind(self)();
export const voteDelegation_drep = self => self.drep.bind(self)();
export const voteDelegation_new = stake_credential => drep =>
  CDL.VoteDelegation.new(stake_credential, drep);

// VoteRegistrationAndDelegation
export const voteRegistrationAndDelegation_stakeCredential = self =>
  self.stake_credential.bind(self)();
export const voteRegistrationAndDelegation_drep = self =>
  self.drep.bind(self)();
export const voteRegistrationAndDelegation_coin = self =>
  self.coin.bind(self)();
export const voteRegistrationAndDelegation_new =
  stake_credential => drep => coin =>
    CDL.VoteRegistrationAndDelegation.new(stake_credential, drep, coin);

// Voter
export const voter_newConstitutionalCommitteeHotCredential = cred =>
  CDL.Voter.new_constitutional_committee_hot_credential(cred);
export const voter_newDrepCredential = cred =>
  CDL.Voter.new_drep_credential(cred);
export const voter_newStakePoolKeyHash = key_hash =>
  CDL.Voter.new_staking_pool_key_hash(key_hash);
export const voter_kind = self => self.kind.bind(self)();

export const voter_hasScriptCredentials = self =>
  self.has_script_credentials.bind(self)();

export const voter_toConstitutionalCommitteeHotCredential = self =>
  undefinedToPurs(self.to_constitutional_committee_hot_credential.bind(self));
export const voter_toDrepCredential = self =>
  undefinedToPurs(self.to_drep_credential.bind(self));
export const voter_toStakePoolKeyHash = self =>
  undefinedToPurs(self.to_staking_pool_key_hash.bind(self));
export const voter_toKeyHash = self =>
  undefinedToPurs(self.to_key_hash.bind(self));

// Voters
export const voters_new = CDL.Voters.new();

// VotingProcedure
export const votingProcedure_new = vote => CDL.VotingProcedure.new(vote);
export const votingProcedure_newWithAnchor = vote => anchor =>
  CDL.VotingProcedure.new_with_anchor(vote, anchor);
export const votingProcedure_voteKind = self => self.vote.bind(self)();
export const votingProcedure_anchor = self =>
  undefinedToPurs(self.anchor.bind(self));

// VotingProcedures
export const votingProcedures_free = self =>
  errorableToPurs(self.free.bind(self));
export const votingProcedures_toBytes = self => self.to_bytes.bind(self)();
export const votingProcedures_fromBytes = bytes =>
  errorableToPurs(CDL.VotingProcedures.from_bytes, bytes);
export const votingProcedures_toHex = self => self.to_hex.bind(self)();
export const votingProcedures_fromHex = hex_str =>
  errorableToPurs(CDL.VotingProcedures.from_hex, hex_str);
export const votingProcedures_toJson = self => self.to_json.bind(self)();
export const votingProcedures_fromJson = json =>
  errorableToPurs(CDL.VotingProcedures.from_json, json);
export const votingProcedures_new = () => CDL.VotingProcedures.new();
export const votingProcedures_insert =
  self => voter => governance_action_id => voting_procedure => () =>
    self.insert.bind(self)(voter, governance_action_id, voting_procedure);
export const votingProcedures_get =
  self => voter => governance_action_id => () =>
    self.get.bind(self)(voter, governance_action_id);
export const votingProcedures_getVoters = self => () =>
  self.get_voters.bind(self)();
export const votingProcedures_getGovernanceActionIdsByVoter =
  self => voter => () =>
    self.get_governance_action_ids_by_voter.bind(self)(voter);

// VotingProposal
export const votingProposal_governanceAction = self =>
  self.governance_action.bind(self)();
export const votingProposal_anchor = self => self.anchor.bind(self)();
export const votingProposal_rewardAccount = self =>
  self.reward_account.bind(self)();
export const votingProposal_deposit = self => self.deposit.bind(self)();
export const votingProposal_new =
  governance_action => anchor => reward_account => deposit =>
    CDL.VotingProposal.new(governance_action, anchor, reward_account, deposit);

// VotingProposals
export const votingProposals_new = CDL.VotingProposals.new();
export const votingProposals_contains = self => elem =>
  self.contains.bind(self)(elem);
export const votingProposals_toOption = self => self.to_option.bind(self)();

// Withdrawals
export const withdrawals_new = () => CDL.Withdrawals.new();

export const minFee = tx => linear_fee => CDL.min_fee(tx, linear_fee);
export const minScriptFee = tx => ex_unit_prices =>
  CDL.min_script_fee(tx, ex_unit_prices);
export const minRefScriptFee =
  total_ref_scripts_size => ref_script_coins_per_byte =>
    CDL.min_ref_script_fee(total_ref_scripts_size, ref_script_coins_per_byte);
export const makeVkeyWitness = tx_body_hash => sk =>
  CDL.make_vkey_witness(tx_body_hash, sk);
export const hashAuxiliaryData = auxiliary_data =>
  CDL.hash_auxiliary_data(auxiliary_data);
export const hashTransaction = tx_body => CDL.hash_transaction(tx_body);
export const hashPlutusData = plutus_data => CDL.hash_plutus_data(plutus_data);
export const hashScriptData = redeemers => cost_models => datums =>
  CDL.hash_script_data(redeemers, cost_models, datums);
export const minAdaForOutput = output => data_cost =>
  CDL.min_ada_for_output(output, data_cost);
