---
title: Confidence-Aware Reachability for Nonlinear Learned Systems
summary: Forward reachability for nonlinear learned system dynamics using state-dependent uncertainty bounds from conformal prediction.
order: 3
tags: [Reachability, Conformal Prediction, Autonomous Marine Vehicles]
relatedPublications: [vijay-2026-confidence-aware-reachability]
---

## Overview

This work develops a data-driven framework for robust forward reachability when a nonlinear system's dynamics are learned from data. Numerical studies use a Wave Adaptive Modular Vessel (WAM-V) unmanned surface vehicle model with Koopman-based learned dynamics.

## Problem

Learned models can be useful for predicting autonomous vehicle motion, but model mismatch makes future-state predictions uncertain. Reachable sets for collision checking need to account for this mismatch over a finite horizon.

## Approach

The framework uses conditional conformal prediction to construct finite-sample, state-dependent uncertainty bounds from calibration data. These bounds enter a recursive reachable-set propagation scheme. Alpha shapes capture nonconvex set geometry; a subsequent decomposition into convex polytopes supports efficient downstream use.

## Results / Demonstration

Numerical simulations on a WAM-V model demonstrate the proposed reachable-set construction and geometric representation. The study reports sets that contain the simulated true trajectory with the prescribed confidence level under its stated assumptions.
